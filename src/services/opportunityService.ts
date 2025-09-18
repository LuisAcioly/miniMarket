import type { Opportunity } from "../types/interfaces";
import localStorage from '../constants/localStorage.json'

export class OpportunityService {
  private opportunities: Opportunity[];

  constructor() {
    this.opportunities = localStorage.data.opportunities; // seguindo a estrutura do JSON final
  }

  getAll(): Opportunity[] {
    return this.opportunities;
  }

  create(opportunity: Omit<Opportunity, "id">): Opportunity {
    const newOpportunity = {
      id: this.opportunities.length + 1, // gera um ID incremental
      ...opportunity,
    };

    this.opportunities.push(newOpportunity);
    return newOpportunity;
  }

  
}
