import type { BaseOpportunity, Lead, Opportunity, Option } from "./interfaces";

export interface AtomicProps {
  children: React.ReactNode;
}

export interface LeadsProps {
  leads: Lead[];
  selectedLeads: string[];
  setSelectedLeads: (arg: string[]) => void;
  handleSort: () => void;
  handleEdit: (arg: Lead) => void;  
}

export interface ContainedButtonProps {
  name: string;
  disabled: boolean;
  handleClick: () => void
}

export interface SelectProps {
  name: string;
  options: Option[];
  status: string;
  handleChange: (arg: string) => void
}

export interface SearchInputProps {
  handleChange: (arg: string) => void
}

export interface DrawerProps {
  isOpen: boolean; 
  editedLead: Lead; 
  handleEdit: (arg: Lead) => void; 
  handleClose: () => void;
}

export interface TextInputProps {
  label?: string;
  error?: boolean;
  type: string;
  value: string;
  placeholder: string;
  handleChange: (arg: string) => void;
}

export interface TabsProps {
  tab: string;
  handleTab: (arg: string) => void;
}

export interface OpportunitiesProps {
  opportunities: Opportunity[]; 
}

export interface NewOpportunitiesProps {
  newOpportunities: BaseOpportunity[];
  handleChange: (arg: BaseOpportunity[]) => void;
  handleRemove: (arg: string) => void;
}

export interface OpportunitiesModalProps {
  isOpen: boolean;
  selectedLeads: string[];
  onClose: () => void;
  handleConfirm: (arg: BaseOpportunity[]) => void;
  removeSelectedLead: (arg: string) => void;
}
