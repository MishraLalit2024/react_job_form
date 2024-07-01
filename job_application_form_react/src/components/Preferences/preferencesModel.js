export default {
    formId: "preferences",
    formField: {
        prefLocation: {
            type: "select",
            name: "preferedLocations",
            label: "Prefered Locations",
            requiredErrorMsg: "Location cannot be empty."
        },
        expectedSalary: {
            type: "text",
            name: "expectedSalary",
            label: "Expected Salary",
            requiredErrorMsg: "Please Enter Expected CTC.",
            invalidErrorMsg: "Please enter a valid amount."
        },
        currentSalary: {
            type: "text",
            name: "currentSalary",
            label: "Current Salary",
            invalidErrorMsg: "Please enter a valid amount.",
            requiredErrorMsg: "Enter 0 if no salary yet!"
        },
        department: {
            type: "select",
            name: "department",
            label: "Department",
            requiredErrorMsg: "Select a department!"
        },
        noticePeriod: {
            type: "number",
            name: "noticePeriod",
            label: "Notice Period",
            requiredErrorMsg: "Enter 0 if no notice period yet!"
        }
    }
}