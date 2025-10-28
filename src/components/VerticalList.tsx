import classNames from "classnames";
import { ReactNode } from "react";
import { StackItem } from "src/types";

interface Props {
    list: StackItem[] | undefined;
    bottomElem?: ReactNode;
}

const VerticalList: React.FC<Props> = (props) => {
    return (
        <div className="h-full w-1/2 flex flex-col justify-end overflow-clip px-2">
            {props.list?.map((item, idx) => {
                return (
                    <div
                        className={classNames([
                            "text-center border-2 border-slate-400 rounded-lg mb-1 py-2 px-3 font-mono font-semibold transition-all duration-300 transform",
                            { "bg-slate-300 text-slate-800 shadow-md": !item.highlight },
                            { "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105 border-green-400": item.highlight },
                        ])}
                        key={idx}
                    >
                        {item.val}
                    </div>
                );
            })}
            {props.bottomElem}
        </div>
    );
};

export default VerticalList;
