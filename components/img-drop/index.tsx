import React, { useEffect, useRef, useState } from "react";
import styles from "./img-drop.module.css";
import { Trash } from "react-bootstrap-icons"
export default function ImageDrop(props:ImageDropProps) {
    const [base64, setBase64] = useState<any>();
    const [imagesUrl, setImagesUrl] = useState<string[]>(props.images);
    const [hovered, setHovered] = useState<number | null>();
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
        const controller = new AbortController();
        fetch(`http://localhost:9999/upload-image`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({imageURL: base64}),
            signal:controller.signal
        })
        .then(res => res.json())
        .then(data => {
            setImagesUrl(prev => [...prev, data])
            props.onChange(data)
        });
        setHovered(null)
        return () => controller.abort()
    }, [base64]);
    return (
        <div className={styles["img-drop-container"]}>
            {imagesUrl.map((_, index) => {
                return (
                    <div className={styles["thumbnail-container"]} key={index} onMouseOver={()=>setHovered(index)} onMouseOut={()=>setHovered(null)}>
                        {hovered == index ? <button onClick={()=>handleDelete(index)} className={styles["delete-button"]}><Trash size={35}/></button> : null}
                        <img src={imagesUrl[index]} className={`${styles["thumbnail"]} ${hovered == index ? styles["hovered"] : ""}`}/>
                    </div>
                )
            })}
            {imagesUrl.length == 4 ? null : <label htmlFor="drop" className={styles["img-drop-label"]}>+</label>}
            <input type="file" name="" id="drop" className={styles["drop"]} onChange={handleChange}/>
        </div>
    )
}