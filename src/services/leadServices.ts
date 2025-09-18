import localStorage from '../constants/localStorage.json'
import backupStorage from '../constants/backupStorage.json'
import type { Lead } from "../types/interfaces";

export class LeadService {
    private leads: Lead[];

    constructor() {
        const result = localStorage.data.leads;

        if(result.length === 0){
            this.leads = backupStorage.data.leads;
        }
        else {
            this.leads = result;
        }
    }

    getAll(): Lead[] {
        return this.leads;
    }

    update(id: number, updatedLead: Partial<Omit<Lead, "id">>): Lead | undefined {
        const index = this.leads.findIndex(lead => lead.id === id);
        if (index === -1) return undefined;
        this.leads[index] = { ...this.leads[index], ...updatedLead };
        return this.leads[index];
    }

    delete(id: number): boolean {
        const index = this.leads.findIndex(lead => lead.id === id);
        if (index === -1) return false; // Lead não encontrado
        this.leads.splice(index, 1); // Remove o lead do array
        return true; // Retorna true indicando sucesso
    }
}
