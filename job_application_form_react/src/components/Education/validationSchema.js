import * as Yup from "yup";
import model from "./model";

const scoreRegex = /[0-9.0-9]$/;
const nameRegex = /^[A-Za-z]+$/;


export const eduValidationSchema = Yup.object().shape({
    boardUnivName: Yup.string()
        .required(`${model.formField.boardUnivName.requiredErrorMsg}`)
        .matches(nameRegex, model.formField.boardUnivName.invalidErrorMsg),
    schoolCollegeName: Yup.string()
        .required(`${model.formField.schoolCollegeName.requiredErrorMsg}`)
        .matches(nameRegex, model.formField.schoolCollegeName.invalidErrorMsg),
    score: Yup.string()
        .required(`${model.formField.score.requiredErrorMsg}`)
        .matches(scoreRegex, model.formField.score.invalidErrorMsg),
    passYear: Yup.string()
        .required(`${model.formField.passYear.requiredErrorMsg}`),
})
// console.log(validationSchema);
