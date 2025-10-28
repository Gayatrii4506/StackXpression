import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    /** Optional variant for different header colors - preserved green/blue theme */
    variant?: "green" | "blue" | "emerald";
}

/**
 * Enhanced ParagraphHeader Component
 * Modern section header with responsive typography
 * Preserved colors: green-600 (#059669), blue-600, emerald-600
 * Features: subtle bottom border, improved spacing, responsive sizing
 * All rendering logic preserved
 */
const ParagraphHeader: React.FC<Props> = ({ children, variant = "green" }) => {
    /* Color variants - preserved green and blue theme */
    const variantClasses = {
        green: "text-green-600 border-green-300/30",
        emerald: "text-emerald-600 border-emerald-300/30",
        blue: "text-blue-600 border-blue-300/30"
    };

    /* Base classes - responsive typography with modern spacing */
    const baseClasses = "font-bold text-base sm:text-lg md:text-lg mt-6 mb-3 border-b pb-2 transition-colors duration-200";

    return (
        <h3 className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </h3>
    );
};

export default ParagraphHeader;
