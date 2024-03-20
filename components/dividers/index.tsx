import styles from "./dividers.module.css";
export default function Divider() {
    return (
        <div className={styles["dividers-container"]}>
            {/* <div className={`${styles["dividers"]} ${styles["ext"]}`}></div> */}
            <img src="/flor-left.png" alt="flor-left.png"  className={styles["flor"]}/>
            <div className={styles["line"]}></div>
            <img src="/flor-center.png" alt="flor-center.png"  className={styles["flor"]}/>
            {/* <div className={styles["dividers"]}></div> */}
            <div className={styles["line"]}></div>
            <img src="/flor-right.png" alt="flor-right.png"  className={styles["flor"]}/>
            {/* <div className={`${styles["dividers"]} ${styles["ext"]}`}></div> */}
        </div>
    )
}