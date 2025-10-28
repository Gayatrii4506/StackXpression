import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    header: string;
}

const TextPanel: React.FC<Props> = (props) => {
    return (
        <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 m-auto md:p-8">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{props.header}</h2>
            <div className="space-y-4">
                {props.children}
            </div>
        </div>
    );
};

export default TextPanel;
