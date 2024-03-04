import { useEffect, useRef, useState } from "react";
import styles from "./img-slider.module.css"
import ArrowButton from "@/components/arrow-button"
export default function ImageSlider(props:ImageSliderProps) {
    const [x, setX] = useState<number>(-200);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleMove = (op: "more" | "less") => {
        if(op == "more" && x == 0) {
            setX(-400)
        }
        if(op == "more" && x != 0) {
            setX(prevX => prevX + 100)
        }
        if(op == "less" && x == -400) {
            setX(0);
        }
        if(op == "less" && x != -400) {
            setX(prevX => prevX - 100);
        }
    }
    const move = () => {
        containerRef.current && containerRef.current.childNodes.forEach((img:any) => {
            img.style.transform = `translateX(${x}%)`
        })
    }
    useEffect(()=>{
        move();
    }, [x])
    return (
        <div className={styles["slider-page"]}>
            <h2>Slider 2</h2>
            <div className={styles["slider"]}>
                <div ref={containerRef} className={styles["img-container-2"]}>
                    {props.imagesList.map((img, index) => {
                        return <img key={index} className={styles["img-2"]} src={img.src} alt="image.jpg" />
                    })}
                </div>
                <div className={styles["buttons-container"]}>
                    <ArrowButton onClick={()=>handleMove("more")} color="white" size={20}/>
                    <ArrowButton onClick={()=>handleMove("less")} color="white" size={20}/>
                </div>
                <div className={styles["current-container"]}>
                    {props.imagesList.map((img, index) => {
                        return <div key={index} className={`${styles["current"]} ${x * -1 / 100 == index ? styles["active"] : ""}`}></div>
                    })}
                    
                    {/* <div className={`${styles["current"]} ${x == -100 ? styles["active"] : ""}`}></div>
                    <div className={`${styles["current"]} ${x == -200 ? styles["active"] : ""}`}></div> */}
                </div>
            </div>
        </div>    
    )
}