import * as yup from "yup";

export const leadSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email required"),
    status: yup.string().required("Status required"),
});