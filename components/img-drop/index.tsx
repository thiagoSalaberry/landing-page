import React, { useEffect, useRef, useState } from "react";
import styles from "./img-drop.module.css";
import { Trash } from "react-bootstrap-icons";
import { useCloudinary } from "@/lib/useCloudinary";
import { CircularProgress } from "@mui/material";
export default function ImageDrop(props:ImageDropProps) {
    const [base64, setBase64] = useState<any>();
    const [imagesUrl, setImagesUrl] = useState<string[]>(props.images);
    const [hovered, setHovered] = useState<number | null>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0);
        if (!file) return;
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            setBase64(reader.result);
        });
        reader.readAsDataURL(file as Blob);
    };
    const handleDelete = (index:number) => {
        imagesUrl.splice(index, 1);
        setImagesUrl([...imagesUrl]);
        props.onClick(index);
    }
    useEffect(()=>{
        if(!base64 || imagesUrl.length == 4) return;
        console.log(base64)
        setError(false);
        setLoading(true);
        const controller = new AbortController();
        fetch("http://localhost:3000/api/upload-image", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({base64: base64}),
            signal:controller.signal
        })
        .then(res => res.json())
        .then(data => {
            setImagesUrl(prev => [...prev, data])
            props.onChange(data)
        })
        .catch(()=>setError(true))
        .finally(()=>setLoading(false));
        setHovered(null)
        return () => controller.abort()
    }, [base64]);
    return (
        <div className={styles["img-drop-container"]}>
            {imagesUrl.map((_, index) => {
                return (
                    <div className={styles["thumbnail-container"]} key={index} onMouseOver={()=>setHovered(index)} onMouseOut={()=>setHovered(null)}>
                        {hovered == index ? <button onClick={()=>handleDelete(index)} className={styles["delete-button"]}><Trash size={35} color="#fff"/></button> : null}
                        <img src={imagesUrl[index]} className={`${styles["thumbnail"]} ${hovered == index ? styles["hovered"] : ""}`}/>
                    </div>
                )
            })}
            {imagesUrl.length == 4 ? null : <label htmlFor="drop" className={`${styles["img-drop-label"]} ${error ? styles["error"] : ""}`}>{
                error ? "X" : 
                loading ? <CircularProgress color="inherit" size={50}/> : 
                "+"
            }</label>}
            <input type="file" name="" id="drop" className={styles["drop"]} onChange={handleChange}/>
        </div>
    )
}