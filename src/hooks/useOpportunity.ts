import { useState, useEffect, useCallback } from "react";
import type { BaseOpportunity, Opportunity } from "../types/interfaces";
import { OpportunityService } from "../services/opportunityService";

export const useOpportunity = () => {
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    
    const [service] = useState(() => new OpportunityService());

    useEffect(() => {
        setOpportunities(service.getAll());
    }, [service]);

    const createMany = useCallback((newOpportunities: BaseOpportunity[]) => {
        const createdOpportunities: Opportunity[] = newOpportunities.map(op => service.create(op));
        setOpportunities(prev => [...prev, ...createdOpportunities]);
        return createdOpportunities;
    }, [service]);

    return {
        opportunities,
        createMany,
    };
};
