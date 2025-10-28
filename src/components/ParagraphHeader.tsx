import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ParagraphHeader: React.FC<Props> = (props) => {
    return <h3 className="font-bold text-lg mt-6 mb-3 text-blue-300 border-b border-blue-300/30 pb-1">{props.children}</h3>;
};

export default ParagraphHeader;
