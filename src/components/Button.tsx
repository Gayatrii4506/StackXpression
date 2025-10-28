import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 transition-all duration-200 mr-2 mb-2 border border-blue-400/20"
            type="button"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
