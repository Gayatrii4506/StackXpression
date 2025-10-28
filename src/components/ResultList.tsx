import classNames from "classnames";

interface Props {
    result: string[];
}

const ResultList: React.FC<Props> = (props) => {
    return (
        <div className="flex min-h-fit py-3 px-4 bg-slate-800/50 border border-slate-700/50 rounded-lg items-center text-sm mt-4">
            <div className="mr-3 font-medium text-slate-300">Result:</div>
            <output className="flex w-full flex-wrap items-center">
                <span className="text-slate-400 mr-1">[</span>
                {props.result.map((val, idx) => {
                    const isLast = idx === props.result.length - 1;
                    return (
                        <div className="flex items-center" key={idx}>
                            <div
                                className={classNames(
                                    "px-2 py-1 min-w-min text-center rounded font-mono transition-all duration-200",
                                    {
                                        "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg": isLast,
                                        "text-slate-300": !isLast,
                                    }
                                )}
                            >
                                {val}
                            </div>
                            {!isLast && <span className="text-slate-400 mx-1">,</span>}
                        </div>
                    );
                })}
                <span className="text-slate-400 ml-1">]</span>
            </output>
        </div>
    );
};

export default ResultList;
