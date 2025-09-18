export interface Lead {
    id: number;
    name: string;
    company: string;
    email: string;
    source: string;
    score: number;
    status: string;
}

export interface Option {
    value: string;
    label: string;
}

export interface FormError {
    email: string;
    status: string;
}

export interface BaseOpportunity {
    name: string;
    stage: string;
    amount: number | null;
    accountName: string;
}

export interface Opportunity extends BaseOpportunity {
    id: number;
}
