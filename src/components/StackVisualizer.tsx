import { useEffect, useRef, useState } from "react";
import { CodeBlock, monokai } from "react-code-blocks";
import { StackItem } from "src/types";
import GenerateBar from "./GenerateBar";
import Slider from "./Slider";
import VerticalList from "./VerticalList";
import { operators, wait } from "../shared/index";
import Swal from "sweetalert2";

interface Props {
    initialPostfixExpression: string;
    initialPrefixExpression: string;
}

const StackVisualizer: React.FC<Props> = (props) => {
    const waitTime = useRef(0.2);
    const postfixExpression = useRef(props.initialPostfixExpression);
    const prefixExpression = useRef(props.initialPrefixExpression);

    const isRunning = useRef(false);
    const [inputList, setInputList] = useState<StackItem[] | undefined>();
    const inputRef = useRef<StackItem[] | undefined>([]);

    const [stackList, setStackList] = useState<StackItem[] | undefined>();
    const stackRef = useRef<StackItem[] | undefined>([]);

    const [postfixHighlight, setPostfixHighlight] = useState("");
    const [prefixHighlight, setPrefixHighlight] = useState("");
    const [activeMode, setActiveMode] = useState<'postfix' | 'prefix'>('postfix');
    const [isAnimating, setIsAnimating] = useState(false);

    const simCount = useRef(0);

    const rawExpressionToStackList = (expr: string) => {
        if (expr === undefined) return;
        const exploded = expr.split(" ");
        const ans: StackItem[] = [];
        exploded.forEach((val) => {
            if (!operators.has(val) && isNaN(+val)) {
                console.error("INVALID INPUT");
                Swal.fire({
                    title: "Invalid Input! ⚠️",
                    text: "Please check if your expression is valid and space-separated",
                    icon: "error",
                    confirmButtonText: "Got it",
                    confirmButtonColor: "#10b981",
                });
                return;
            }
            const item: StackItem = {
                val: val,
                highlight: false,
            };
            ans.push(item);
        });
        return ans;
    };

    const inputListLoaded = useRef(false);
    const triggerPostfix = useRef(false);
    const triggerPrefix = useRef(false);

    const resetToExpression = (isPostfix: boolean) => {
        triggerPostfix.current = false;
        triggerPrefix.current = false;
        simCount.current++;
        setInputList(() => {
            inputListLoaded.current = true;
            return rawExpressionToStackList(
                isPostfix ? postfixExpression.current : prefixExpression.current
            );
        });
        setPostfixHighlight("");
        setPrefixHighlight("");
        setStackList(undefined);
        setActiveMode(isPostfix ? 'postfix' : 'prefix');
        setIsAnimating(false);
    };

    useEffect(() => {
        if (inputListLoaded) {
            if (triggerPostfix.current) {
                evaluateExpression(true);
                triggerPostfix.current = false;
            } else if (triggerPrefix.current) {
                evaluateExpression(false);
                triggerPrefix.current = false;
            }
            inputListLoaded.current = false;
        }
    }, [inputList]);

    useEffect(() => {
        resetToExpression(true);
    }, []);

    const postfixCode = `for each token in input {
	if token is operand
		push to stack
	else if token is operator
		pop two operands from stack 
			(first popped is right operand)
			(second popped is left operand)
		perform operation on the operands
		push result of operation to stack
}
stack should only have one item: answer`;

    const prefixCode = `for each token in reversed input {
	if token is operand
		push to stack
	else if token is operator
		pop two operands from stack 
			(first popped is left operand)
			(second popped is right operand)
		perform operation on the operands
		push result of operation to stack
}
stack should only have one item: answer`;

    const setHighlight = (isPostfix: boolean, lines: string) => {
        if (isPostfix) setPostfixHighlight(lines);
        else setPrefixHighlight(lines);
    };

    const evaluateExpression = async (isPostfix: boolean) => {
        if (inputList === undefined || inputList.length === 0) return false;
        isRunning.current = true;
        setIsAnimating(true);
        inputRef.current = inputList;

        const ogSimCount = simCount.current;
        let hasError = false;

        while (inputRef.current.length > 0) {
            let top: StackItem | undefined;
            setHighlight(isPostfix, "1");
            setInputList((oldList) => {
                let temp = oldList?.at(0);
                if (!isPostfix) {
                    temp = oldList?.at(oldList.length - 1);
                }
                if (temp !== undefined) {
                    temp.highlight = true;
                    top = temp;
                }
                inputRef.current = oldList;
                return oldList;
            });

            await wait(waitTime.current * 1000);
            if (ogSimCount !== simCount.current) break;

            if (top === undefined) {
                console.error("INPUT EMPTY");
                hasError = true;
                break;
            }

            if (operators.has(top.val)) {
                setHighlight(isPostfix, "4");
                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;

                let popped: StackItem | undefined;
                setInputList((oldList) => {
                    const temp = isPostfix ? oldList?.shift() : oldList?.pop();
                    if (temp !== undefined) {
                        popped = temp;
                    }
                    inputRef.current = oldList;
                    return oldList;
                });

                setHighlight(isPostfix, "5-7");
                setStackList((oldList) => {
                    if (oldList === undefined) return oldList;
                    oldList[0] = { ...oldList[0], highlight: true };
                    oldList[1] = { ...oldList[1], highlight: true };
                    stackRef.current = oldList;
                    return oldList;
                });

                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;

                let rightOperand: StackItem | undefined;
                setStackList((oldList) => {
                    const temp = oldList?.shift();
                    if (temp !== undefined && !isNaN(+temp.val)) {
                        rightOperand = temp;
                    } else {
                        hasError = true;
                        Swal.fire({
                            title: "Stack Error! ⚠️",
                            text: "Unable to pop operand from stack. Invalid expression.",
                            icon: "error",
                            confirmButtonText: "Okay",
                            confirmButtonColor: "#10b981",
                        });
                    }
                    stackRef.current = oldList;
                    return oldList;
                });

                if (hasError) break;

                let leftOperand: StackItem | undefined;
                setStackList((oldList) => {
                    const temp = oldList?.shift();
                    if (temp !== undefined && !isNaN(+temp.val)) {
                        leftOperand = temp;
                    } else {
                        hasError = true;
                        Swal.fire({
                            title: "Stack Error! ⚠️",
                            text: "Unable to pop operand from stack. Invalid expression.",
                            icon: "error",
                            confirmButtonText: "Okay",
                            confirmButtonColor: "#10b981",
                        });
                    }
                    stackRef.current = oldList;
                    return oldList;
                });

                if (hasError) break;

                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;
                setHighlight(isPostfix, "8-9");

                let calcAns = 0;
                if (leftOperand?.val === undefined || rightOperand?.val === undefined) {
                    break;
                }
                const leftVal = parseInt(leftOperand?.val);
                const rightVal = parseInt(rightOperand?.val);

                switch (popped?.val) {
                    case "+":
                        calcAns = leftVal + rightVal;
                        break;
                    case "-":
                        calcAns = isPostfix ? leftVal - rightVal : rightVal - leftVal;
                        break;
                    case "*":
                        calcAns = leftVal * rightVal;
                        break;
                    case "/":
                        calcAns = isPostfix ? leftVal / rightVal : rightVal / leftVal;
                        break;
                    case "^":
                        calcAns = isPostfix ? Math.pow(leftVal, rightVal) : Math.pow(rightVal, leftVal);
                        break;
                }

                setStackList((oldList) => {
                    if (oldList === undefined) oldList = [];
                    const newList: StackItem[] = [
                        { val: calcAns.toString(), highlight: true },
                        ...oldList,
                    ];
                    stackRef.current = newList;
                    return newList;
                });
                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;
            } else {
                setHighlight(isPostfix, "2");
                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;
                setHighlight(isPostfix, "3");

                let popped: StackItem | undefined;
                setInputList((oldList) => {
                    const temp = isPostfix ? oldList?.shift() : oldList?.pop();
                    if (temp !== undefined) {
                        popped = temp;
                    }
                    inputRef.current = oldList;
                    return oldList;
                });

                setStackList((oldList) => {
                    if (oldList === undefined) oldList = [];
                    const newList = popped === undefined ? oldList : [popped, ...oldList];
                    stackRef.current = newList;
                    return newList;
                });
                await wait(waitTime.current * 1000);
                if (ogSimCount !== simCount.current) break;
            }

            setStackList((oldList) => {
                if (oldList === undefined) return oldList;
                oldList.forEach((item) => (item.highlight = false));
                return oldList;
            });
        }

        setHighlight(isPostfix, "11");
        setStackList((oldList) => {
            if (oldList === undefined) return oldList;
            if (oldList.length !== 1) {
                if (!hasError) {
                    Swal.fire({
                        title: "Invalid Expression! ❌",
                        text: "Stack should have exactly one element at the end",
                        icon: "error",
                        confirmButtonText: "Okay",
                        confirmButtonColor: "#10b981",
                    });
                }
            }
            oldList[0] = { ...oldList[0], highlight: true };
            stackRef.current = oldList;
            return oldList;
        });

        if (stackRef?.current?.length === 1)
            await wait(waitTime.current * 10 * 1000);

        isRunning.current = false;
        setIsAnimating(false);
        resetToExpression(isPostfix);
    };

    return (
        <div className="w-full">
            {/* Mode Toggle */}
            <div className="mb-6">
                <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-1.5 shadow-md border border-gray-200">
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => {
                                if (!isAnimating) {
                                    resetToExpression(true);
                                }
                            }}
                            disabled={isAnimating}
                            className={`relative px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                                activeMode === 'postfix'
                                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-lg">→</span>
                                <span>POSTFIX</span>
                            </div>
                            <div className="text-xs mt-0.5 opacity-80">Left to Right</div>
                        </button>
                        <button
                            onClick={() => {
                                if (!isAnimating) {
                                    resetToExpression(false);
                                }
                            }}
                            disabled={isAnimating}
                            className={`relative px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                                activeMode === 'prefix'
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-lg">←</span>
                                <span>PREFIX</span>
                            </div>
                            <div className="text-xs mt-0.5 opacity-80">Right to Left</div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Visualization Area */}
            <div className="relative bg-gradient-to-br from-white via-emerald-50/40 to-green-50/40 rounded-3xl border-2 border-emerald-200/70 shadow-2xl overflow-hidden mb-6">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-300 to-emerald-400 rounded-full blur-3xl"></div>
                </div>

                {/* Status Bar */}
                <div className="relative bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border-b-2 border-emerald-200/50 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${isAnimating ? 'bg-green-500 animate-pulse' : 'bg-gray-300'} shadow-lg`}></div>
                            <span className="font-bold text-gray-700">
                                {isAnimating ? 'Evaluating...' : 'Ready'}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <span className="px-3 py-1 bg-white/60 rounded-lg border border-emerald-200">
                                Mode: <span className="text-emerald-600">{activeMode.toUpperCase()}</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stack Visualization */}
                <div className="relative h-[450px] p-6">
                    <div className="flex h-full gap-4">
                        {/* Input Queue */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-emerald-200/50 shadow-lg overflow-hidden">
                                <div className="h-full flex flex-col">
                                    <div className="flex-1 overflow-y-auto">
                                        <VerticalList
                                            list={inputList}
                                            bottomElem={null}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-sm shadow-lg">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Input Queue
                                </div>
                            </div>
                        </div>

                        {/* Stack */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-green-200/50 shadow-lg overflow-hidden">
                                <div className="h-full flex flex-col">
                                    <div className="flex-1 overflow-y-auto">
                                        <VerticalList
                                            list={stackList}
                                            bottomElem={null}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-bold text-sm shadow-lg">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Stack (LIFO)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Control Panel */}
            <div className="space-y-4">
                {/* Expression Inputs */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">→</span>
                            </div>
                            <span className="font-bold text-gray-700">Postfix Expression</span>
                        </div>
                        <GenerateBar
                            text="Evaluate"
                            onSubmit={(newVal) => {
                                postfixExpression.current = newVal;
                                resetToExpression(true);
                                triggerPostfix.current = true;
                            }}
                            initialInput={postfixExpression.current}
                        />
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">←</span>
                            </div>
                            <span className="font-bold text-gray-700">Prefix Expression</span>
                        </div>
                        <GenerateBar
                            text="Evaluate"
                            onSubmit={(newVal) => {
                                prefixExpression.current = newVal;
                                resetToExpression(false);
                                triggerPrefix.current = true;
                            }}
                            initialInput={prefixExpression.current}
                            prefixOnRandom
                        />
                    </div>
                </div>

                {/* Speed Slider */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-700 text-lg">Animation Speed</span>
                    </div>
                    <Slider
                        onChange={(speed) => {
                            waitTime.current = 0.25 / speed;
                        }}
                    />
                </div>

                {/* Pseudocode Display */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-slate-600">
                        <h3 className="font-black text-white text-lg flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            {activeMode === 'postfix' ? 'Postfix' : 'Prefix'} Pseudocode
                        </h3>
                    </div>
                    <div className="p-6">
                        <CodeBlock
                            text={activeMode === 'postfix' ? postfixCode : prefixCode}
                            language="text"
                            theme={monokai}
                            showLineNumbers
                            highlight={activeMode === 'postfix' ? postfixHighlight : prefixHighlight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StackVisualizer;