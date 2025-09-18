import { useEffect, useState } from "react";
import ContainedButton from "../../atoms/containedButton";
import SearchInput from "../../atoms/searchInput";
import Select from "../../atoms/select";
import Drawer from "../../molecules/drawer";
import LeadsTable from "../../molecules/leadsTable";
import type { BaseOpportunity, Lead } from "../../../types/interfaces";
import { STATUS_OPTIONS } from "../../../constants/constants";
import { useLead } from "../../../hooks/useLead";
import OpportunitiesModal from "../opportunitiesModal";
import { useOpportunity } from "../../../hooks/useOpportunity";

const LeadsTab = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const { 
        sortByScore, 
        setSearchTerm, 
        filteredLeads, 
        setStatusFilter, 
        statusFilter, 
        editedLead, 
        setEditedLead, 
        update, 
        selectedLeads, 
        setSelectedLeads, 
        removeMany
    } = useLead();
    const { createMany } = useOpportunity();

    useEffect(() => {
        if(selectedLeads.length === 0){
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
    }, [selectedLeads])

    const handleEdit = (updatedLead: Lead) => {
        update(updatedLead);
        setOpenDrawer(false);
    }

    const onEdit = (lead: Lead) => {
        setEditedLead(lead);
        setOpenDrawer(true);
    }

    const handleConfirm = (newOpportunities: BaseOpportunity[]) => {
        createMany(newOpportunities);
        removeMany(newOpportunities);
        setSelectedLeads([]);
        setOpenModal(false);
    };

    

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-row gap-2 items-center flex-1">
                    <SearchInput handleChange={setSearchTerm}/>
                    <Select name="Status" status={statusFilter} options={STATUS_OPTIONS} handleChange={setStatusFilter}/>
                </div>
                <ContainedButton name="Convert Lead" handleClick={() => setOpenModal(true)} disabled={disabledButton}/>
            </div>
            <LeadsTable leads={filteredLeads} handleSort={sortByScore} handleEdit={onEdit} selectedLeads={selectedLeads} setSelectedLeads={setSelectedLeads}/>
            <Drawer isOpen={openDrawer} editedLead={editedLead} handleEdit={handleEdit} handleClose={() => setOpenDrawer(false)}/>
            <OpportunitiesModal isOpen={openModal} onClose={() => setOpenModal(false)} selectedLeads={selectedLeads} handleConfirm={handleConfirm} removeSelectedLead={(name) => setSelectedLeads(prev => prev.filter(lead => lead !== name))}/>
        </div>
    );
};

export default LeadsTab;
