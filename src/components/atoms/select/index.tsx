import type { SelectProps } from "../../../types/props";

const Select = ({name, options, handleChange, status}: SelectProps) => {

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleChange(e.target.value);
    };

    return (
        <form className="min-w-48">
            <select value={status} onChange={handleSelect} id="countries" className="bg-gray-50 border text-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-600">
                <option value={options[0].value} selected>{name}</option>
                {options.slice(1).map((option) => {
                    return (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </form>
    );
};

export default Select;
