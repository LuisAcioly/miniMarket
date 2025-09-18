import * as yup from "yup";

const opportunitySchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    stage: yup.string().required("Stage is required"),
    accountName: yup.string().required("Account Name is required"),
    amount: yup.number().nullable(),
});

export const opportunitiesArraySchema = yup.array().of(opportunitySchema);