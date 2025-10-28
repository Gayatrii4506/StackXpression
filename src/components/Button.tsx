import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    variant?: "primary" | "secondary" | "blue" | "gradient";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({ 
    children, 
    onClick, 
    variant = "primary",
    size = "md",
    className = "",
    disabled = false
}) => {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm sm:text-base",
        lg: "px-8 py-4 text-base sm:text-lg"
    };

    const variantClasses = {
        primary: "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40",
        secondary: "bg-white hover:bg-gray-50 border-2 border-emerald-500 hover:border-emerald-600 text-emerald-600 hover:text-emerald-700 shadow-md",
        blue: "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40",
        gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
    };

    const baseClasses = "font-bold rounded-xl transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group";

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
    );
};

export default Button;