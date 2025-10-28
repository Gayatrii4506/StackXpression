import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    header: string;
    /** Optional variant for different panel themes - preserved color scheme */
    variant?: "default" | "green" | "blue";
    /** Optional className for additional customization */
    className?: string;
}

/**
 * Enhanced TextPanel Component
 * Modern card-style panel with improved spacing and hover effects
 * Preserved colors: green (#22c55e, #059669), blue (#3b82f6), gray variants
 * Features: responsive padding, smooth transitions, modern shadows
 * All content rendering logic preserved
 */
const TextPanel: React.FC<Props> = ({ 
    children, 
    header, 
    variant = "default",
    className = ""
}) => {
    /* Variant styles - subtle hover effects with preserved colors */
    const variantClasses = {
        default: "hover:shadow-gray-500/10 hover:border-gray-300",
        green: "hover:shadow-green-500/10 hover:border-green-300",
        blue: "hover:shadow-blue-500/10 hover:border-blue-300"
    };

    /* Base styling - modern card design with responsive padding */
    const baseClasses = "bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 m-auto";
    
    /* Responsive padding - better spacing on mobile and desktop */
    const paddingClasses = "p-6 sm:p-7 md:p-8";

    return (
        <div className={`${baseClasses} ${paddingClasses} ${variantClasses[variant]} ${className}`}>
            {/* Header - responsive typography with preserved color */}
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-5 text-gray-900 border-b border-gray-100 pb-3">
                {header}
            </h2>
            
            {/* Content area - improved spacing between elements */}
            <div className="space-y-5">
                {children}
            </div>
        </div>
    );
};

export default TextPanel;
