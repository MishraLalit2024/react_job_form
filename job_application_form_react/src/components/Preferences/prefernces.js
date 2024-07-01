import React from "react";
import preferencesModel from "./preferencesModel";
import { InputField } from "../common/inputField";
import { Form, Formik } from 'formik'

export default function PreferenceLayout() {
    const {
        formField: {
            prefLocation,
            expectedSalary,
            currentSalary,
            department,
            noticePeriod,
        }
    } = preferencesModel;
    return (
        <React.Fragment>
            <Formik>
                <Form>
                    <InputField name={prefLocation.name} type={prefLocation.type} label={prefLocation.label} />
                </Form>
            </Formik>
        </React.Fragment>
    );
}