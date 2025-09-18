import { useEffect, useState } from "react";
import type { Lead } from "../../../types/interfaces";
import type { LeadsProps } from "../../../types/props";

const LeadsTable = ({leads, handleSort, handleEdit, selectedLeads, setSelectedLeads }: LeadsProps) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

    useEffect(() => {
        if (selectedLeads.length === leads.length && leads.length > 0){
            setIsAllSelected(true);
        }
        else {
            setIsAllSelected(false);
        }
    }, [selectedLeads]);

    const handleSelectAll = (checked: boolean) => {
        setSelectedLeads(checked ? leads.map(l => l.name) : []);
    };

    const handleSelectLead = (lead: Lead) => {
        const updatedSelected = selectedLeads.includes(lead.name)
        ? selectedLeads.filter(name => name !== lead.name)
        : [...selectedLeads, lead.name];

        setSelectedLeads(updatedSelected);
    };


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase dark:bg-green-800 dark:text-white">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input checked={isAllSelected} onChange={(e) => handleSelectAll(e.target.checked)} id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 cursor-pointer accent-purple-900 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Source
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button onClick={handleSort} className="border-none m-0 bg-transparent uppercase cursor-pointer flex flex-row">
                                Score
                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                </svg>
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 ? 
                        <tr className="bg-white text-gray-900 dark:bg-gray-200">
                            <td scope="row" colSpan={7} className="px-6 py-4 font-medium whitespace-nowrap text-center">
                                No results
                            </td>
                        </tr> 
                        :
                        leads.map((lead: Lead, index: number) => {
                            return (
                                    <tr onClick={() => handleEdit(lead)} className={`bg-white border-b ${index%2 !== 0 ? 'dark:bg-gray-200' : 'dark:bg-gray-300'} cursor-pointer text-gray-900 dark:hover:bg-gray-400`}>
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" checked={selectedLeads.includes(lead.name)} onClick={(e) => {e.stopPropagation(); handleSelectLead(lead)}} className="w-4 h-4 text-blue-600 accent-purple-900 bg-gray-100 border-gray-300 rounded-sm cursor-pointer focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-ellipsis">
                                            {lead.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {lead.company}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.source}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.score}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.status}
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

export default LeadsTable;
