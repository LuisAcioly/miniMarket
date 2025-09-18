import { useEffect, useState } from "react";
import type { OpportunitiesModalProps } from "../../../types/props";
import { opportunitiesArraySchema } from "../../../utils/opportunitySchema";
import ContainedButton from "../../atoms/containedButton";
import CreateOpportunitiesTable from "../../molecules/createOpportunitiesTable";
import * as yup from "yup";
import type { BaseOpportunity } from "../../../types/interfaces";

const OpportunitiesModal = ({ isOpen, selectedLeads, onClose, handleConfirm, removeSelectedLead }: OpportunitiesModalProps) => {
    const [newOpportunities, setNewOpportunities] = useState<BaseOpportunity[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if(selectedLeads.length === 0){
            onClose();
        }
        
        const opportunities: BaseOpportunity[] = selectedLeads.map((accountName) => ({
            name: "",
            stage: "",
            amount: null, 
            accountName,
        }));
        setNewOpportunities(opportunities);
    }, [onClose, selectedLeads]);

    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            await opportunitiesArraySchema.validate(newOpportunities, { abortEarly: false });
            handleConfirm(newOpportunities)
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                setError(true);
            }
        }
    };

    return (
        <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden={!isOpen}
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-auto bg-black/50"
        >
            <div className="relative bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">
                        <div className="flex flex-row gap-2 items-center">
                            <svg className="w-6 h-6 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z" clip-rule="evenodd"/>
                            </svg>
                            Create Opportunities
                        </div>
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4 max-h-96">
                    <CreateOpportunitiesTable newOpportunities={newOpportunities} handleChange={(value) => setNewOpportunities(value)} handleRemove={(value) => removeSelectedLead(value)}/>
                    {error && <p className="text-red-600">Fill in all the Name and Stage fields (Amount is optional).</p>}
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <ContainedButton name="Create" handleClick={handleSubmit} disabled={false}/>
                </div>
            </div>
        </div>
    );
};

export default OpportunitiesModal;
