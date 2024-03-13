import React, { useState } from "react";
import styles from "./inputs.module.css";
export default function InputField(props:InputFieldProps) {
    const  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if(props.onChange) {
            props.onChange(inputValue);
        };
    };
    return (
        <div className={styles["input-container"]}>
            <label htmlFor={props.name} className={styles["input-label"]}>{props.label}{props.missing && props.value == "" ? <p className={styles["error-message"]}>Completá este campo</p> : null}</label>
            <input type={props.type} value={props.value} name={props.name} className={`${styles["input"]} ${props.value !== "" ? styles["valued"] : ""} ${props.missing && props.value == "" ? styles["missing"] : ""}`} onChange={handleChange} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}