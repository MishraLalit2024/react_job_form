import React, { useState } from "react";
import basicDetailsModel from "./basicDetailsModel";
import { InputField } from "../common/inputField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import statesAndCities from "./statesAndCities";
import SelectField from "../common/selectField";


export default function BasicDetails() {
    const {
        formField: {
            firstName,
            lastName,
            middleName,
            address1,
            address2,
            phone,
            email,
            state,
            city,
            designation,
            gender
        }
    } = basicDetailsModel;
    const [stateValue, changeState] = useState('Andaman and Nicobar Islands');
    const [cityValue, changeCity] = useState('');
    const [designationValue, changeDesignation] = useState('Junior Software Developer');
    const [genderValue, changeGender] = useState('Male');

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Basic Details
            </Typography>
            <br />
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <InputField
                        name={firstName.name}
                        type={firstName.type}
                        label={firstName.label}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <InputField
                        name={lastName.name}
                        type={lastName.type}
                        label={lastName.label}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <InputField
                        name={middleName.name}
                        type={middleName.type}
                        label={middleName.label}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={address1.name}
                        type={address1.type}
                        label={address1.label}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={address2.name}
                        type={address2.type}
                        label={address2.label}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={phone.name}
                        type={phone.type}
                        label={phone.label}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={email.name}
                        type={email.type}
                        label={email.label}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        label={state.label}
                        selectChildren={Object.keys(statesAndCities)}
                        name={state.name}
                        onChange={e => changeState(e.target.value)}
                        value={stateValue}
                    ></SelectField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        label={city.label}
                        selectChildren={statesAndCities[`${stateValue}`]}
                        name={city.name}
                        onChange={e => {
                            changeCity(e.target.value)
                        }}
                        value={cityValue}
                    ></SelectField>
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        label={gender.label}
                        selectChildren={['Male', 'Female', 'Others']}
                        name={gender.name}
                        onChange={e => changeGender(e.target.value)}
                        value={genderValue}
                    ></SelectField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        label={designation.label}
                        selectChildren={["Junior Software Developer", "Senior Software Developer", "Quality Assurance Officer"]}
                        name={designation.name}
                        onChange={e => {
                            changeDesignation(e.target.value)
                        }}
                        value={designationValue}
                    ></SelectField>
                </Grid>
            </Grid>
        </React.Fragment >
    );
}

