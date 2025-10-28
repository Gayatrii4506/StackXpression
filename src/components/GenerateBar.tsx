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
        <div className="w-full space-y-3">
            {/* Label - improved typography and spacing */}
            <label 
                htmlFor="custom-input" 
                className="block text-sm sm:text-base font-medium text-gray-700"
            >
                {props.text}
            </label>
            
            {/* Input field - enhanced styling with better focus states */}
            <input
                id="custom-input"
                className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm sm:text-base px-4 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 shadow-sm hover:border-gray-400"
                type="text"
                placeholder="ex: 1 2 + 3 4 - /"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyPress={(e) => {
                    /* Submit on Enter key - preserved functionality */
                    if (e.key === 'Enter') {
                        props.onSubmit(customInput);
                    }
                }}
            />
            
            {/* Action buttons container - positioned below input */}
            <div className="flex gap-2">
                    {/* Submit button - preserved blue theme (#3b82f6) */}
                    <button
                        className="flex-1 sm:flex-none bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                        type="button"
                        onClick={() => props.onSubmit(customInput)}
                        aria-label="Submit input"
                    >
                        Submit
                    </button>
                    
                    {/* Clear button - neutral slate colors */}
                    <button
                        className="flex-1 sm:flex-none bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
                        type="button"
                        onClick={() => setCustomInput("")}
                        aria-label="Clear input"
                    >
                        Clear
                    </button>
                    
                    {/* Random button - orange accent color */}
                    <button
                        className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                        type="button"
                        onClick={() =>
                            setCustomInput(() => {
                                /* Random generation logic - preserved functionality */
                                return props.prefixOnRandom
                                    ? randomPreorders[
                                        Math.floor(
                                            Math.random() *
                                            randomPreorders.length
                                        )
                                    ]
                                    : randomPostorders[
                                        Math.floor(
                                            Math.random() *
                                            randomPostorders.length
                                        )
                                    ];
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
