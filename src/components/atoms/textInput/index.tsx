import type { TextInputProps } from "../../../types/props";

const TextInput = ({label, type, value, error, handleChange, placeholder }: TextInputProps) => {
    return (
        <div className="w-full">
            {label !== undefined && <label htmlFor="text-input" className="block mb-2 text-sm font-medium text-gray-90">{label}</label>}
            <input type={type} id="input" onChange={(e) => handleChange(e.target.value)} value={value} className={`bg-gray-50 border ${error ? "border-red-600" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-900`} placeholder={placeholder} required />
        </div>
    );
};

export default TextInput;
