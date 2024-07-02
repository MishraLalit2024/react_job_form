const model = {
    formId: "education",
    formField: {
        boardUnivName: {
            name: "board-univ-name",
            type: "text",
            label: "Board/University Name: ",
            requiredErrorMsg: "Required!",
            invalidErrorMsg: "Invalid input!"
        },
        schoolCollegeName: {
            name: "school-college-name",
            type: "text",
            label: "School/College Name: ",
            requiredErrorMsg: "Required!",
            invalidErrorMsg: "Invalid input!"
        },
        score: {
            name: "score",
            type: "text",
            label: "Marks: ",
            requiredErrorMsg: "Required!",
            invalidErrorMsg: "Invalid input!"
        },
        passYear: {
            name: "passing-year",
            type: "date",
            label: "Passing Year: ",
            requiredErrorMsg: "Required!",
            invalidErrorMsg: "Invalid input!"
        }
    }
}

const EduFormInitialValues = {
    boardUnivName: '',
    schoolCollegeName: '',
    score: '0.00',
    passYear: '2020',
}


export default model;