import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    /** Optional className for additional styling */
    className?: string;
}

/**
 * Enhanced ExternalLink Component
 * Modern external link with preserved green color scheme
 * Preserved colors: green-600 (#059669), green-700
 * Features: smooth hover transitions, proper accessibility attributes
 * All navigation logic preserved
 */
const ExternalLink: React.FC<Props> = ({ children, href, className = "" }) => {
    /* Base styling - preserved green theme with smooth transitions */
    const baseClasses = "text-green-600 hover:text-green-700 hover:underline transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 rounded-sm";

    return (
        <a 
            className={`${baseClasses} ${className}`}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            /* Accessibility: indicate external link */
            aria-label={`${children} (opens in new tab)`}
        >
            {children}
        </a>
    );
};

export default ExternalLink;
