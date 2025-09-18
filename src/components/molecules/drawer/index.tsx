import { useEffect, useState } from "react";
import type { DrawerProps } from "../../../types/props";
import type { FormError, Lead } from "../../../types/interfaces";
import { defaultLead, STATUS_OPTIONS } from "../../../constants/constants";
import TextInput from "../../atoms/textInput";
import Select from "../../atoms/select";
import ContainedButton from "../../atoms/containedButton";
import { leadSchema } from "../../../utils/leadSchema";
import * as yup from "yup";

const Drawer = ({isOpen, editedLead, handleEdit, handleClose}: DrawerProps) => {
    const [lead, setLead] = useState<Lead>(defaultLead);
    const [errors, setErrors] = useState<FormError>({email: "", status: ""});

    useEffect(() => {
        setLead(editedLead)
    }, [editedLead]);

    const handleInputChange = (value: string) => {
        setLead((prevLead) => ({
        ...prevLead,
        ["email"]: value,
        }));
    };

    const handleSelectChange = (value: string) => {
        setLead((prevLead) => ({
        ...prevLead,
        ["status"]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await leadSchema.validate({ email: lead.email, status: lead.status });
            setErrors({email: "", status: ""});
            handleEdit(lead);
        } catch (err) {
        if (err instanceof yup.ValidationError) {
            setErrors((prevLead) => ({
                ...prevLead,
                [`${err.path}`]: err.message,
            }));
        }
        }
    };
    
    return (
        <div id="drawer-form" className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} bg-gray-300 w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-form-label`}>
            <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-800 uppercase dark:text-gray-800">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>
                Edit Lead
            </h5>
            <button type="button" onClick={handleClose} data-drawer-hide="drawer-form" aria-controls="drawer-form" className="text-gray-400 bg-transparent cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <form className="mb-6 flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                    <TextInput label="Email" type="email" value={lead.email} handleChange={handleInputChange} placeholder="Insert Email"/>
                    {errors.email !== "" && <p className="text-sm text-gray-500 dark:text-red-500" id="file_input_help">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="text-input" className="block mb-2 text-sm font-medium text-gray-90">Status</label>
                    <Select name="Status" options={STATUS_OPTIONS} status={lead.status} handleChange={handleSelectChange}/>
                    {errors.status !== "" && <p className="text-sm text-gray-500 dark:text-red-500" id="file_input_help">{errors.status}</p>}
                </div>
                <ContainedButton name="CONFIRM" handleClick={handleSubmit} disabled={false}/>
            </form>
        </div>
    );
};

export default Drawer;
