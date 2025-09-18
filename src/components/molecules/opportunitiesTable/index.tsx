import type { Opportunity } from "../../../types/interfaces";
import type { OpportunitiesProps } from "../../../types/props";

const OpportunitiesTable = ({ opportunities }: OpportunitiesProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full min-w-4xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    </tr>
                </thead>
                <tbody>
                    {opportunities.length === 0 ? 
                        <tr className="bg-white text-gray-900 dark:bg-gray-200">
                            <td scope="row" colSpan={7} className="px-6 py-4 font-medium whitespace-nowrap text-center">
                                No results
                            </td>
                        </tr> 
                        :
                        opportunities.map((opportunity: Opportunity, index: number) => {
                            return (
                                    <tr className={`bg-white border-b ${index%2 !== 0 ? 'dark:bg-gray-200' : 'dark:bg-gray-300'} cursor-pointer text-gray-900 dark:hover:bg-gray-400`}>
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-ellipsis">
                                            {opportunity.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {opportunity.stage}
                                        </td>
                                        <td className="px-6 py-4">
                                            {opportunity.amount === null ? "-" : opportunity.amount }
                                        </td>
                                        <td className="px-6 py-4">
                                            {opportunity.accountName}
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

export default OpportunitiesTable;
