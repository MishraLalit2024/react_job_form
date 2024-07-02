export default {
    formId: "basicDetails",
    formField: {
        firstName: {
            name: "firstName",
            type: "text",
            label: "First Name: ",
            requiredErrorMsg: "Required fields must not be empty!",
            invalidErrorMsg: "Invalid input!"
        },
        lastName: {
            name: "lastName",
            type: "text",
            label: "Last Name: ",
            requiredErrorMsg: "Required fields must not be empty!",
            invalidErrorMsg: "Invalid input!"
        },
        middleName: {
            name: "middleName",
            type: "text",
            label: "Middle Name: ",
            requiredErrorMsg: "Required fields must not be empty!",
            invalidErrorMsg: "Invalid input!"
        },
        address1: {
            name: "address1",
            type: "textarea",
            label: "Current Address: ",
            requiredErrorMsg: "Required fields must not be empty!"
        },
        address2: {
            name: "address2",
            type: "textarea",
            label: "Permanent Address: ",
            requiredErrorMsg: "Required fields must not be empty!"
        },
        phone: {
            name: "phone",
            type: "text",
            label: "Mobile Number: ",
            requiredErrorMsg: "Required fields must not be empty!",
            invalidErrorMsg: "Please enter a valid mobile number!"
        },
        email: {
            name: "email",
            type: "text",
            label: "Email Address: ",
            requiredErrorMsg: "Required fields must not be empty!",
            invalidErrorMsg: "Please enter a valid email address!"
        },
        state: {
            name: "state",
            type: "select",
            label: "State: ",
            requiredErrorMsg: "Required fields must not be empty!"
        },
        city: {
            name: "city",
            type: "select",
            label: "City: ",
            requiredErrorMsg: "Required fields must not be empty!"
        },
        designation: {
            name: "designation-old",
            type: "select",
            label: "Designation: ",
            requiredErrorMsg: "Required!"
        },
        gender: {
            name: "gender",
            type: "select",
            label: "Gender: ",
            requiredErrorMsg: "Required!"
        }
    }
}