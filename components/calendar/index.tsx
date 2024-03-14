import { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import { isSunday, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, isPast, isToday, isEqual, isSameMonth } from "date-fns";
import { formatDate } from "@/lib/formatDate";
export default function Calendar(props: Calendar) {
    const months:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const [selected, setSelected] = useState<Date | null>(props.selectedDay!);
    const [currentMonth, setCurrentMonth] = useState<number>(getMonth(props.selectedDay!));
    const [reservados, setReservados] = useState(new Array(35).fill(1).map(n => n * Math.floor(Math.random() * 2 + 1)));
    const thisMonth = getMonth(new Date());
    const handleDaySelect = ({day, taken}: {day:Date, taken:boolean}) => {
        if(isPast(day) || isSunday(day) || !isSameMonth(day, currentMonthDays[0].day) || taken) return;
        setSelected(day);
        props.onClick(day);
    };
    const handleMonth = (towards: "prev" | "next") => {
        if(currentMonth == thisMonth && towards == "prev") return;
        if(currentMonth == thisMonth + 3 && towards == "next") return; 
        if(towards == "next") setCurrentMonth(prevMonth => prevMonth + 1);
        if(towards == "prev" && thisMonth) setCurrentMonth(prevMonth => prevMonth - 1);
    };
    const currentMonthDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth)),end: endOfMonth(new Date(2024, currentMonth))}).map((day, index) => {return {day, taken: reservados[index] == 2}});
    const lastPrevMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth - 1)), end: endOfMonth(new Date(2024, currentMonth - 1))}).slice(-(35 - currentMonthDays.length));
    const firstNextMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth + 1)), end: endOfMonth(new Date(2024, currentMonth + 1))}).slice(0, 35 - currentMonthDays.length);
    let daysToDisplay = [];
    if(currentMonthDays[0].day.getDay() == 1) {
        daysToDisplay = currentMonthDays.concat(firstNextMonthsDays.map(day => {return {day, taken: false}})) as any;
    } else if(currentMonthDays[0].day.getDay() != 1 && currentMonthDays[currentMonthDays.length - 1].day.getDay() != 0) {
        daysToDisplay = lastPrevMonthsDays.map(day => {return {day, taken: false}}).slice(- (currentMonthDays[0].day.getDay() - 1)).concat(currentMonthDays).concat(firstNextMonthsDays.slice(0, (currentMonthDays[0].day.getDay() - 1)).map(day => {return {day, taken:false}}));
    } else if(currentMonthDays[0].day.getDay() != 1 && currentMonthDays [currentMonthDays.length - 1].day.getDay() == 0) {
        daysToDisplay = lastPrevMonthsDays.map(day => {return {day, taken: false}}).concat(currentMonthDays);
    };
    return <div className={styles["calendar"]}>
        <div className={styles["month-display"]}>
            {currentMonth > thisMonth ? (
                <>
                    <button className={styles["prev-month"]} onClick={()=>handleMonth("prev")}>{"<"}</button>
                    <div className={styles["divider"]}></div>
                </>
            ) : null}
            <p className={styles["current-month"]}>{months[currentMonth]} 2024</p>
            {currentMonth < thisMonth + 3 ? (
                <>
                    <div className={styles["divider"]}></div>
                    <button className={styles["next-month"]} onClick={()=>handleMonth("next")}>{">"}</button>
                </>
            ) : null}
        </div>
        <div className={styles["week-days"]}>
            <span className={`${styles["week-day"]} ${styles["Mon"]}`}>Lun</span>
            <span className={`${styles["week-day"]} ${styles["Tue"]}`}>Mar</span>
            <span className={`${styles["week-day"]} ${styles["Wed"]}`}>Mié</span>
            <span className={`${styles["week-day"]} ${styles["Thu"]}`}>Jue</span>
            <span className={`${styles["week-day"]} ${styles["Fri"]}`}>Vie</span>
            <span className={`${styles["week-day"]} ${styles["Sat"]}`}>Sáb</span>
            <span className={`${styles["week-day"]} ${styles["Sun"]}`}>Dom</span>
        </div>
        <div className={styles["calendar-days"]}>
            {daysToDisplay.map(({day, taken}: {day:Date, taken:boolean}, index:number) => {
                return <p key={index} className={
                    `
                        ${styles["day"]}
                        ${!isSameMonth(day, currentMonthDays[0].day) ? styles["prev-month"] : ""}
                        ${styles[day.toString().split(" ")[0]]}
                        ${isPast(day) || isSunday(day) ? styles["gone"] : ""}
                        ${isToday(day) ? styles["today"] : ""}
                        ${taken ? styles["taken"] : ""}
                        ${selected && isEqual(day, selected) ? styles["selected"] : ""}
                    `
                    }
                    onClick={()=>handleDaySelect({day, taken})}
                    >{parseInt(day.toString().split(" ")[2])}</p>
            })}
        </div>
        {props.missing ? <p className={styles["error-message"]}>Elegí una fecha que no sea hoy</p>
            :
            !isToday(selected!) ? <p className={styles["chosen"]}>Tu turno es el {selected ? formatDate(selected) : null}</p> : null
        }
    </div>
}