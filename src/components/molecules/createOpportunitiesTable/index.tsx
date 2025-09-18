import type { BaseOpportunity } from "../../../types/interfaces";
import type { NewOpportunitiesProps } from "../../../types/props";
import TextInput from "../../atoms/textInput";

const CreateOpportunitiesTable = ({ newOpportunities, handleChange, handleRemove }: NewOpportunitiesProps) => {
    const onChange = (index: number, field: keyof BaseOpportunity, value: string | number | null) => {
        const updated = [...newOpportunities];
        updated[index] = { ...updated[index], [field]: value };
        handleChange(updated);
    };

    return (
        <div className="relative max-h-80 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full w-max-4xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase dark:bg-green-800 dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stage
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Account Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newOpportunities.length === 0 ? 
                        <tr className="bg-white text-gray-900 dark:bg-gray-200">
                            <td scope="row" colSpan={7} className="px-6 py-4 font-medium whitespace-nowrap text-center">
                                No results
                            </td>
                        </tr> 
                        :
                        newOpportunities.map((newOpportunity, index) => {
                            return (
                                    <tr className={`bg-white border-b ${index%2 !== 0 ? 'dark:bg-gray-200' : 'dark:bg-gray-300'} text-gray-90`}>
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-ellipsis">
                                            <TextInput type="text" placeholder="Insert Name..." value={newOpportunity.name} handleChange={(value) => onChange(index, "name", value === "" ? null : value)}/>
                                        </th>
                                        <td className="px-6 py-4">
                                            <TextInput type="text" handleChange={(value) => onChange(index, "stage", value === "" ? null : value)} placeholder="Insert Stage..." value={newOpportunity.stage} />
                                        </td>
                                        <td className="px-6 py-4">
                                            <TextInput type="number" handleChange={(value) => onChange(index, "amount", value === "" ? null : Number(value))} placeholder="Insert Amount..." value={newOpportunity.amount === null ? "-" : `${newOpportunity.amount}`}  />
                                        </td>
                                        <td className="px-6 py-4 text-gray-800">
                                            {newOpportunity.accountName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleRemove(newOpportunity.accountName)} className="border-none bg-transparent m-0 cursor-pointer">
                                                <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>

    );
};

export default CreateOpportunitiesTable;
