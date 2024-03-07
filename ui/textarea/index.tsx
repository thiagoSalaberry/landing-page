import React, { useState } from "react";
import styles from "./textarea.module.css";
export default function TextAreaField(props:InputFieldProps) {
    const  handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        if(props.onChange) {
            props.onChange(inputValue);
        };
    };
    return (
        <div className={styles["textarea-container"]}>
            <label htmlFor={props.name} className={styles["textarea-label"]}>{props.label}</label>
            <textarea value={props.value} name={props.name} className={`${styles["textarea"]} ${props.value !== "" ? styles["valued"] : ""}`} onChange={handleChange} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}