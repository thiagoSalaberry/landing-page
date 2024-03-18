import { useEffect, useState } from "react"
import styles from "./arrow-button.module.css"
export default function ArrowButton({color, size, invert, onClick}: {color:string, size:number, invert?:boolean, onClick: ()=>void}) {
    const [active, setActive] = useState<boolean>(false);
    const handleOnClick = () => {
        setActive(true);
        setTimeout(()=>{setActive(false)}, 575)
        onClick();
    };
    return (
        <button onClick={handleOnClick} disabled={active} className={`${styles["svg-button"]} ${invert ? styles["invert"] : ""}`}>
            {/* <svg width={size} height={size * 1.48} viewBox="0 0 71 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow" clipPath="url(#clip0_15_19)">
                    <path id="inner" className={`${styles["inner"]} ${active ? styles["active"] : ""}`}
                        d="M31.1155 41.8537L4.81116 1.78272C4.49048 1.29422 3.9454 1 3.36104 1C1.98116 1 1.1537 2.53304 1.91093 3.68657L27.686 42.9512C27.9047 43.2844 27.9047 43.7156 27.686 44.0488L1.91092 83.3134C1.15369 84.467 1.98117 86 3.36104 86C3.94539 86 4.49048 85.7058 4.81115 85.2173L31.1155 45.1463C31.7716 44.1468 31.7716 42.8532 31.1155 41.8537Z"
                        fill={color} stroke={color} strokeWidth="2" />
                    <path id="outer" className={`${styles["outer"]} ${active ? styles["active"] : ""}`}
                        d="M57.1155 41.8537L30.8112 1.78272C30.4905 1.29422 29.9454 1 29.361 1C27.9812 1 27.1537 2.53304 27.9109 3.68657L53.686 42.9512C53.9047 43.2844 53.9047 43.7156 53.686 44.0488L27.9109 83.3134C27.1537 84.467 27.9812 86 29.361 86C29.9454 86 30.4905 85.7058 30.8112 85.2173L57.1155 45.1463C57.7716 44.1468 57.7716 42.8532 57.1155 41.8537Z"
                        fill={color} stroke={color} strokeWidth="2" />
                </g>
            </svg> */}
            <svg width={size * 5.23} height={size} viewBox="0 0 68 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_72_186)">
                <path d="M67.2861 6.446L55.2241 0.598999V5.373H18.3501L14.3901 2.037H0.841064L4.80106 5.373V7.52L0.841064 10.854H14.3901L18.3501 7.52H55.2241V12.294L67.2861 6.446Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_72_186">
                <rect width="68" height="13" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </button>
    )
}