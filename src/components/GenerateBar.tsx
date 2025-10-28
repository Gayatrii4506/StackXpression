import { useState } from "react";
import randomPostorders from "src/data/randomPostorders";
import randomPreorders from "src/data/randomPreorders";

interface Props {
    text: string;
    onSubmit: (newGen: string) => void;
    initialInput: string;
    prefixOnRandom?: boolean;
}

const GenerateBar: React.FC<Props> = (props) => {
    const [customInput, setCustomInput] = useState(props.initialInput);
    return (
        <div className="text-center w-full space-y-3">
            <label htmlFor="Custom Tree Input" className="block text-sm font-medium text-slate-300">
                {props.text}
            </label>
            <div className="flex items-center gap-2 w-full">
                <input
                    className="flex-1 bg-slate-700/50 border border-slate-600 text-white text-sm px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                    type="text"
                    placeholder="ex: 1 2 + 3 4 - /"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                />
                <div className="flex gap-1">
                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-xs px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        type="button"
                        onClick={() => props.onSubmit(customInput)}
                    >
                        Submit
                    </button>
                    <button
                        className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-medium text-xs px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        type="button"
                        onClick={() => setCustomInput("")}
                    >
                        Clear
                    </button>
                    <button
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-xs px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        type="button"
                        onClick={() =>
                            setCustomInput(() => {
                                return props.prefixOnRandom
                                    ? randomPreorders[
                                    Math.floor(
                                        Math.random() *
                                        randomPostorders.length
                                    )
                                    ]
                                    : randomPostorders[
                                    Math.floor(
                                        Math.random() *
                                        randomPostorders.length
                                    )
                                    ];
                            })
                        }
                    >
                        Random
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenerateBar;
