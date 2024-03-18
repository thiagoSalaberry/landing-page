import { useEffect, useRef, useState } from "react";
import styles from "./img-slider.module.css"
import ArrowButton from "@/components/arrow-button"
export default function ImageSlider(props:ImageSliderProps) {
    const [x, setX] = useState<number>(-100);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleMove = (op: "more" | "less") => {
        if(op == "more" && x == 0) {
            setX(-200)
        }
        if(op == "more" && x != 0) {
            setX(prevX => prevX + 100)
        }
        if(op == "less" && x == -200) {
            setX(100);
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
        <div className={styles["slider"]}>
            <div ref={containerRef} className={styles["img-container"]}>
                {props.imagesList.map((img, index) => {
                    return <img key={index} className={styles["img"]} src={img.src} alt="image.jpg" />
                })}
            </div>
            <div className={styles["content"]}>
                <div className={styles["arrow-left"]}>
                    <ArrowButton onClick={()=>handleMove("more")} color="white" size={8} invert={true}/>
                </div>
                <div className={styles["arrow-right"]}>
                    <ArrowButton onClick={()=>handleMove("less")} color="white" size={8}/>
                </div>
                <div className={styles["current-container"]}>
                    {props.imagesList.map((_, index) => {
                        return <div key={index} className={`${styles["current"]} ${x * -1 / 100 == index ? styles["active"] : ""}`}></div>
                    })}
                </div>
                <h1 className={styles["welcome-title"]}>TEOXYS TATTOO</h1>
                <p className={styles["welcome-desc"]}>It’s not all about the tools, it’s about design, precision and attention to detail.</p>
                <button className={styles["welcome-button"]}>Agendar turno</button>
            </div>
        </div>
    )
}