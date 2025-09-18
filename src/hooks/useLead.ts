import { useState, useEffect, useCallback, useMemo } from "react";
import type { BaseOpportunity, Lead } from "../types/interfaces";
import { LeadService } from "../services/leadServices";
import { defaultLead } from "../constants/constants";

export const useLead = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
    const [editedLead, setEditedLead] = useState<Lead>(defaultLead);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [service] = useState(() => new LeadService());

    useEffect(() => {
        setLeads(service.getAll());
    }, [service]);

    const filteredLeads = useMemo(() => {
        if (searchTerm === "" && statusFilter === "") {
            return leads;
        }

        let result = [...leads];

        result.sort((a, b) =>
            sortDirection === "asc" ? a.score - b.score : b.score - a.score
        );

        if (searchTerm.trim() !== "") {
            result = result.filter((lead) =>
            lead.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (statusFilter !== "") {
            result = result.filter((lead) => lead.status === statusFilter);
        }

        return result;
    }, [leads, searchTerm, sortDirection, statusFilter]);

    const sortByScore = () => {
        const sortedLeads = [...leads].sort((a, b) => {
            return sortDirection === "asc" ? a.score - b.score : b.score - a.score;
        });

        setLeads(sortedLeads);
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    };

    const update = useCallback(
        (updatedLead: Lead): Lead | undefined => {
            const updated = service.update(updatedLead.id, updatedLead);
            setLeads(service.getAll());
            return updated;
        },
        [service]
    );

    const removeMany = useCallback(
        (opportunitiesToRemove: BaseOpportunity[]) => {
            opportunitiesToRemove.forEach((removeOp) => {
                const lead = service
                    .getAll()
                    .find((op) => op.name === removeOp.accountName);
                if (lead) {
                    service.delete(lead.id);
                }
            });
            setLeads(service.getAll());
        },
        [service]
    );

    return {
        leads,
        sortDirection,
        sortByScore,
        filteredLeads,
        statusFilter,
        setStatusFilter,
        editedLead,
        setEditedLead,
        setSearchTerm,
        update,
        selectedLeads,
        setSelectedLeads,
        removeMany,
    };
};
