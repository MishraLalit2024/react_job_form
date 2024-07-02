import * as Yup from "yup";
import basicDetailsModel from "./basicDetailsModel";

const phoneRegex = /[0-9]$/;
const emailregex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const nameRegex = /^[A-Za-z]+$/;


export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required(`${basicDetailsModel.formField.firstName.requiredErrorMsg}`)
        .matches(nameRegex, basicDetailsModel.formField.firstName.invalidErrorMsg),
    lastName: Yup.string()
        .required(`${basicDetailsModel.formField.lastName.requiredErrorMsg}`)
        .matches(nameRegex, basicDetailsModel.formField.lastName.invalidErrorMsg),
    middleName: Yup.string()
        .required(`${basicDetailsModel.formField.middleName.requiredErrorMsg}`)
        .matches(nameRegex, basicDetailsModel.formField.middleName.invalidErrorMsg),
    address1: Yup.string()
        .required(`${basicDetailsModel.formField.address1.requiredErrorMsg}`),
    address2: Yup.string()
        .required(`${basicDetailsModel.formField.address2.requiredErrorMsg}`),
    phone: Yup.string()
        .required(`${basicDetailsModel.formField.phone.requiredErrorMsg}`)
        .matches(phoneRegex, basicDetailsModel.formField.phone.invalidErrorMsg)
        .max(12),
    email: Yup.string()
        .required(`${basicDetailsModel.formField.email.requiredErrorMsg}`)
        .matches(emailregex, basicDetailsModel.formField.email.invalidErrorMsg)
})
// console.log(validationSchema);
