import React from "react";
import basicDetailsModel from "./basicDetailsModel";
import { InputField } from "../common/inputField";
import { Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import statesAndCities from "./statesAndCities";


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
        }
    } = basicDetailsModel;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Basic Details
            </Typography>
            <br />
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
        </React.Fragment>
    );
}

