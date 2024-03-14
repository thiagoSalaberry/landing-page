import React, { useState } from "react";
import styles from "./select.module.css";
export default function SelectField(props:SelectProps) {
    const [highlighted, setHighlighted] = useState(props.selected);
    const handleColorChange = () => {
        setHighlighted(!highlighted);
        props.onChange(!highlighted);
    };
    return (
        <div className={`${styles["switch-container"]} ${highlighted ? styles["highlighted"] : ""}`}>
            <p className={`${styles["b-and-g"]} ${styles[highlighted ? "" : "highlighted"]}`} onClick={()=>setHighlighted(false)}>Black & Grey</p>
            <label className={styles["switch"]}>
                <input type="checkbox" checked={highlighted} onChange={()=>handleColorChange()} />
                <span className={styles["slider"]}></span>
            </label>
            <p className={`${styles["color"]} ${styles[highlighted ? "highlighted" : ""]}`} onClick={()=>setHighlighted(true)}>A Color</p>
        </div>
    )
}