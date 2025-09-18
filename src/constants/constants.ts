import type { Lead, Option } from "../types/interfaces";

export const STATUS_OPTIONS: Option[] = [
    { value: "", label: "" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
];

export const defaultLead: Lead = {
    id: 0,
    name: "",
    company: "",
    email: "",
    source: "",
    score: 0,
    status: "inactive",
};