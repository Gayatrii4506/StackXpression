import { useState } from "react";
import randomPostorders from "src/data/randomPostorders";
import randomPreorders from "src/data/randomPreorders";

interface Props {
    text: string;
    onSubmit: (newGen: string) => void;
    initialInput: string;
    prefixOnRandom?: boolean;
}

/**
 * Enhanced GenerateBar Component
 * Modern input bar with action buttons
 * Preserved colors: blue (#3b82f6), slate, orange gradients
 * Features: responsive layout, improved button styling, smooth animations
 * All form logic and random generation preserved
 */
const GenerateBar: React.FC<Props> = (props) => {
    /* State management - preserved original functionality */
    const [customInput, setCustomInput] = useState(props.initialInput);
    
    return (
        <div className="w-full space-y-4">
            {/* Label with improved styling */}
            <label 
                htmlFor="custom-input" 
                className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2"
            >
                {props.text}
            </label>
            
            {/* Modern Input Container */}
            <div className="relative">
                <input
                    id="custom-input"
                    className="w-full bg-white border-2 border-gray-300 focus:border-blue-500 text-gray-900 text-base px-5 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 shadow-sm hover:shadow-md hover:border-gray-400 font-mono"
                    type="text"
                    placeholder="ex: 8 2 3 * - 7 +"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            props.onSubmit(customInput);
                        }
                    }}
                />
            </div>
            
            {/* Action buttons - centered with modern styling */}
            <div className="flex gap-3 justify-center">
                {/* Submit button - professional blue */}
                <button
                    className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-w-[100px]"
                    type="button"
                    onClick={() => props.onSubmit(customInput)}
                    aria-label="Submit input"
                >
                    Submit
                </button>
                
                {/* Clear button - professional gray */}
                <button
                    className="flex-1 sm:flex-none bg-gray-600 hover:bg-gray-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50 min-w-[100px]"
                    type="button"
                    onClick={() => setCustomInput("")}
                    aria-label="Clear input"
                >
                    Clear
                </button>
                
                {/* Random button - professional orange */}
                <button
                    className="flex-1 sm:flex-none bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 min-w-[100px]"
                    type="button"
                    onClick={() =>
                        setCustomInput(() => {
                            return props.prefixOnRandom
                                ? randomPreorders[Math.floor(Math.random() * randomPreorders.length)]
                                : randomPostorders[Math.floor(Math.random() * randomPostorders.length)];
                        })
                    }
                    aria-label="Generate random input"
                >
                    Random
                </button>
            </div>
        </div>
    );
};

export default GenerateBar;
