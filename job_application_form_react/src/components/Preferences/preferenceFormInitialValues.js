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

export default {
    [prefLocation.name]: '',
    [expectedSalary.name]: '',
    [currentSalary.name]: '',
    [department.name]: '',
    [noticePeriod.name]: '',
};