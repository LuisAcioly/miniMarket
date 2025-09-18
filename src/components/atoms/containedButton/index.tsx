import type { ContainedButtonProps } from "../../../types/props";

const ContainedButton = ({name, handleClick, disabled}: ContainedButtonProps) => {
    return (
        <button type="button" onClick={handleClick} disabled={disabled} className={`h-full ${!disabled ? "cursor-pointer dark:bg-green-700 dark:hover:bg-green-800 text-white" : "bg-green-800 text-gray-50"} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5`}>
            {name}
        </button>
    );
};

export default ContainedButton;
