import { forwardRef } from "react";

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
    label,
    id,
    name,
    type,
    value,
    placeholder = 'placeholder',
    onChange,
    required = false,
    error = false
}, ref) => {

    const baseClasses = "mt-1 w-full px-6 py-4.5 rounded-lg text-black font-bold text-sm tracking-input-tracking caret-d8 placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-transparent"
    const defaultBorder = "border border-input-border focus:border-d8"
    const errorBorder = "border-input-border-error focus:border-input-border-error"

    return (
        <div>
            <div className="flex justify-between">
                <label htmlFor={id} className="block text-xs font-bold leading-normal tracking-[-0.21px] text-black mb-1">
                    {label}
                </label>
                {error && (
                    <span className="text-input-border-error text-xs font-medium">
                        Wrong format
                    </span>
                )}
            </div>
            <input
                ref={ref}
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className={`${baseClasses} ${error ? errorBorder : defaultBorder}`}
            />
        </div>
    )
})

export default InputField