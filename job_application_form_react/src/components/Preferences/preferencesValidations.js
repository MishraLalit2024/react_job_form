import * as Yup from "yup";
import preferencesModel from "./preferencesModel";

const {
    formField: {
        prefLocation,
        expectedSalary,
        currentSalary,
        department,
        noticePeriod,
    }
} = preferencesModel;

const salaryRegex = /^\d+$/;

export default [
    Yup.object().shape({
        [prefLocation.name]: Yup.string()
            .required(`${prefLocation.requiredErrorMsg}`),
        [expectedSalary.name]: Yup.string()
            .required(`${expectedSalary.requiredErrorMsg}`)
            .matches(salaryRegex, expectedSalary.invalidErrorMsg),
        [currentSalary.name]: Yup.string()
            .required(`${currentSalary.requiredErrorMsg}`)
            .matches(salaryRegex, currentSalary.invalidErrorMsg),
        [department.name]: Yup.string()
            .required(`${department.requiredErrorMsg}`),
        [noticePeriod.name]: Yup.string()
            .required(`${noticePeriod.requiredErrorMsg}`)
            .matches(salaryRegex, expectedSalary.invalidErrorMsg),
    })
]