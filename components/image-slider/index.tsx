import { useEffect, useRef, useState } from "react";
import styles from "./img-slider.module.css"
import ArrowButton from "@/components/arrow-button"
export default function ImageSlider(props:ImageSliderProps) {
    const [x, setX] = useState<number>(-100);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(1);
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
            {/* Mobile */}
            <div ref={containerRef} className={`${styles["img-container"]} ${styles["mobile"]}`}>
                {props.imagesList.map((img, index) => {
                    return <img key={index} className={styles["img"]} src={img.src} alt="image.jpg" />
                })}
            </div>
            <div className={`${styles["content"]} ${styles["mobile"]}`}>
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
                <p className={styles["welcome-desc"]}>Puntillismo | Tradicional</p>
                <button className={styles["welcome-button"]} onClick={props.onClick}>Agendar turno</button>
            </div>
            {/* Mobile */}
            {/* Desktop */}
            <div className={`${styles["hero-content"]} ${styles["desktop"]}`}>
                <h1 className={styles["hero-title"]}>TEOXYS TATTOO</h1>
                <p className={styles["hero-desc"]}>Puntillismo | Tradicional</p>
                <button className={styles["hero-button"]} onClick={props.onClick}>Agendar turno</button>
            </div>
            <div className={`${styles["hero-imgs-container"]} ${styles["desktop"]}`}>
                {props.imagesList.map((img, index) => {
                    return (
                        <div onMouseEnter={()=>setHovered(index)} className={`${styles["hero-img-container"]} ${hovered == index ? styles["actual"] : ""}`}>
                            <img key={index} className={styles["hero-img"]} src={img.src} alt="image.jpg"/>
                        </div>
                    )
                })}
            </div>
            {/* Desktop */}
        </div>
    )
}