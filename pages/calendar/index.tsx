import styles from "./calendar.module.css";
import Calendar from "@/components/calendar";
export default function CalendarPage() {
    return <main className={styles["calendar-page"]}>
        <Calendar/>
    </main>
}