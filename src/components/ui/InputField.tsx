import Typography from "./Typography";

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // Add optional props for better reusability if needed later (e.g., required, error state)
    required?: boolean;
}

export default function InputField({
    label,
    id,
    name,
    type,
    value,
    placeholder = 'placeholder',
    onChange,
    required = false
}: InputFieldProps) {

    return (
        <div>
            <label htmlFor={id} className="block text-xs font-bold leading-normal tracking-[-0.21px] text-black mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className="mt-1 w-full px-6 py-4.5 rounded-lg border border-input-border text-black font-bold text-sm tracking-input-tracking caret-d8 placeholder:text-black/40 focus:outline-none focus:border-d8 focus:ring-1 focus:ring-transparent"
            />
        </div>
    )
};