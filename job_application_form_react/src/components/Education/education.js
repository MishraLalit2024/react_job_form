import React, { useState } from "react";
import SelectField from "../common/selectField";
import { InputField } from "../common/inputField";
import model from "./model";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DatePicker from "react-datepicker";


const {
    formField: {
        boardUnivName,
        schoolCollegeName,
        score,
        passYear
    }
} = model;

export default function Education() {
    // const [numberOfRows, setRows] = useState(0);
    const [passYearValue, setPassYear] = useState("2020");

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Education Details
            </Typography>
            <br />
            <EducationRow index={0} passYearValue={passYearValue} setPassYear={setPassYear} />
            <br />
            <EducationRow index={1} passYearValue={passYearValue} setPassYear={setPassYear} />
            <br />
            <EducationRow index={2} passYearValue={passYearValue} setPassYear={setPassYear} />
            <br />
            <EducationRow index={3} passYearValue={passYearValue} setPassYear={setPassYear} />
            <br />
            <EducationRow index={4} passYearValue={passYearValue} setPassYear={setPassYear} />
        </React.Fragment>
    );
}




function EducationRow({ index, passYearValue, setPassYear }) {
    return (
        <Grid container>
            <Grid item xs={12} sm={3}>
                <InputField
                    name={boardUnivName.name + `-${index}`}
                    type={boardUnivName.type + `-${index}`}
                    label={boardUnivName.label}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <InputField
                    name={schoolCollegeName.name + `-${index}`}
                    type={schoolCollegeName.type + `-${index}`}
                    label={schoolCollegeName.label}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <InputField
                    name={score.name + `-${index}`}
                    type={score.type + `-${index}`}
                    label={score.label}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <DatePicker
                    selected={passYearValue}
                    onChange={(date) => setPassYear(date)}
                    showYearPicker
                    dateFormat="yyyy"
                />
            </Grid>
        </Grid>
    );
}