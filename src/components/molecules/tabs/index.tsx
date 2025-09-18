import type { TabsProps } from "../../../types/props";

const Tabs = ({tab, handleTab}: TabsProps) => {
    return (
        <div className="w-full flex justify-center">
            <ul className="w-96 hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full focus-within:z-10">
                    <button onClick={() => handleTab("leads")} className={`inline-block w-full p-4 dark:border-gray-700 rounded-s-lg ${tab === "leads" ? "dark:bg-green-700 dark:text-white" : "dark:hover:bg-green-700 dark:bg-green-800 cursor-pointer dark:hover:text-white"}`} aria-current="page">Leads</button>
                </li>
                <li className="w-full focus-within:z-10">
                    <button onClick={() => handleTab("opportunities")} className={`inline-block w-full p-4 dark:border-gray-700 rounded-e-lg ${tab === "opportunities" ? "dark:bg-green-700 dark:text-white" : "dark:hover:bg-green-700 dark:bg-green-800 cursor-pointer dark:hover:text-white"}`}>Opportunities</button>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;
