import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    /** Optional variant for different button styles - preserved green theme */
    variant?: "primary" | "secondary" | "blue";
    /** Optional size prop for responsive button sizing */
    size?: "sm" | "md" | "lg";
    /** Optional className for additional customization */
    className?: string;
}

/**
 * Enhanced Button Component
 * Modern, responsive button with preserved color scheme (#22c55e, #059669)
 * Features: smooth hover effects, transform animations, focus states
 * All JavaScript functionality preserved
 */
const Button: React.FC<Props> = ({ 
    children, 
    onClick, 
    variant = "primary",
    size = "md",
    className = ""
}) => {
    /* Size variants - responsive padding and text sizing */
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-sm sm:text-base",
        lg: "px-6 py-3 text-base sm:text-lg"
    };

    /* Variant styles - preserved green and blue colors */
    const variantClasses = {
        primary: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border border-green-400/20 hover:shadow-green-500/25",
        secondary: "bg-white hover:bg-gray-50 border-2 border-green-600 hover:border-green-700 text-green-600 hover:text-green-700",
        blue: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400/20 hover:shadow-blue-500/25"
    };

    /* Base classes - modern styling with smooth transitions */
    const baseClasses = "font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50 mr-2 mb-2";

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
