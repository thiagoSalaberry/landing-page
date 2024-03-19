import styles from "./logo.module.css"
export default function Logo({size}: {size:number}) {
    return (
        <svg width={size} height={size * 1.19} className={styles["logo"]} viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={styles["rect"]} x="19" width="4" height="50" rx="2" fill="#fff"/>
            <rect className={styles["rect"]} x="27" y="16" width="4" height="15" rx="2" transform="rotate(-90 27 16)" fill="#fff"/>
            <rect className={styles["rect"]} y="16" width="4" height="15" rx="2" transform="rotate(-90 0 16)" fill="#fff"/>
        </svg>
    )
}