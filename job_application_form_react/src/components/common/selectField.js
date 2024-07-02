import React from "react";
import { useField, ErrorMessage } from "formik";

const SelectField = ({ label, selectChildren, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="select-container">
            <label>{label}</label>
            <select {...field} {...props}>
                {selectChildren.map((item) => {
                    return <OptionFields data={item} />
                })}
            </select>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}


const OptionFields = ({ data }) => {
    return (<option value={data}>{data}</option>);
}


export default SelectField;