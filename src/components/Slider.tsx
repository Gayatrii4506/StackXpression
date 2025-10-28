import { useState } from "react";

interface Props {
    onChange: (speed: number) => void;
}

const Slider: React.FC<Props> = (props) => {
    const [sliderVal, setSliderVal] = useState(0.5);
    const sliderChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.valueAsNumber;
        setSliderVal(newValue);
        props.onChange(newValue);
    };
    return (
        <div className="flex w-full items-center space-x-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
            <label htmlFor="Speed" className="text-sm font-medium text-slate-300 shrink-0">
                Simulation Speed
            </label>
            <div className="flex-1 relative">
                <input
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
                    type="range"
                    min="0.1"
                    max="1"
                    value={sliderVal}
                    onChange={sliderChange}
                    step="0.02"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>Slow</span>
                    <span>Fast</span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
