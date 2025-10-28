import { useState } from "react";

interface Props {
    onChange: (speed: number) => void;
    /** Optional variant for different background themes */
    variant?: "light" | "dark";
}

/**
 * Enhanced Slider Component
 * Modern range slider for simulation speed control
 * Preserved colors: blue gradient (#3b82f6, #8b5cf6), slate theme
 * Features: smooth transitions, improved styling, accessibility enhancements
 * All slider logic and onChange callback preserved
 */
const Slider: React.FC<Props> = ({ onChange, variant = "light" }) => {
    /* State management - preserved original functionality */
    const [sliderVal, setSliderVal] = useState(0.5);
    
    /* Handle slider change - preserved original logic */
    const sliderChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.valueAsNumber;
        setSliderVal(newValue);
        onChange(newValue);
    };

    /* Variant styles - light/dark theme support */
    const variantClasses = {
        light: "bg-gray-50 border-gray-200",
        dark: "bg-slate-800/50 border-slate-700/50"
    };

    const labelClasses = {
        light: "text-gray-700",
        dark: "text-slate-300"
    };

    const hintClasses = {
        light: "text-gray-500",
        dark: "text-slate-400"
    };

    return (
        <div className={`flex w-full items-center space-x-4 p-4 rounded-xl border ${variantClasses[variant]} shadow-sm transition-all duration-200`}>
            {/* Label - improved typography */}
            <label 
                htmlFor="simulation-speed-slider" 
                className={`text-sm sm:text-base font-medium shrink-0 ${labelClasses[variant]}`}
            >
                Simulation Speed
            </label>
            
            {/* Slider container - responsive layout */}
            <div className="flex-1 relative">
                {/* Range input - styled with custom CSS (slider class) */}
                <input
                    id="simulation-speed-slider"
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                    type="range"
                    min="0.1"
                    max="1"
                    value={sliderVal}
                    onChange={sliderChange}
                    step="0.02"
                    aria-label="Adjust simulation speed"
                    aria-valuemin={0.1}
                    aria-valuemax={1}
                    aria-valuenow={sliderVal}
                    aria-valuetext={`Speed: ${Math.round(sliderVal * 100)}%`}
                />
                
                {/* Speed indicators - improved spacing and typography */}
                <div className="flex justify-between text-xs sm:text-sm mt-2">
                    <span className={hintClasses[variant]}>Slow</span>
                    <span className={`font-medium ${labelClasses[variant]}`}>
                        {Math.round(sliderVal * 100)}%
                    </span>
                    <span className={hintClasses[variant]}>Fast</span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
