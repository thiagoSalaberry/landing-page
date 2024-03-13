import { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import dateFns, { isSunday, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, formatRFC7231, isPast, isToday, isEqual, isSameMonth } from "date-fns";
export default function Calendar() {
    const months:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const [selected, setSelected] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState<number>(getMonth(new Date()));
    const thisMonth = getMonth(new Date());
    const handleDaySelect = (day: Date) => {
        if(isPast(day) || isSunday(day) || !isSameMonth(day, currentMonthDays[0])) return;
        setSelected(day);
    };
    const handleMonth = (towards: "prev" | "next") => {
        if(currentMonth == thisMonth && towards == "prev") return;
        if(currentMonth == thisMonth + 3 && towards == "next") return; 
        if(towards == "next") setCurrentMonth(prevMonth => prevMonth + 1);
        if(towards == "prev" && thisMonth) setCurrentMonth(prevMonth => prevMonth - 1);
    };
    const formatDate = (date:Date):string => {
        const [weekDay, fecha, _, year] = formatRFC7231(date).split(" ");
        const day = weekDay.replace(",", "") as keyof typeof dayMap;
        const dayMap = {
            Mon: "Lunes",
            Tue: "Martes",
            Wed: "Miércoles",
            Thu: "Jueves",
            Fri: "Viernes",
            Sat: "Sábado",
            Sun: "Domingo"
        }
        return `${dayMap[day]} ${parseInt(fecha)} de ${months[date.getMonth()]} del ${year}`;
    };
    const currentMonthDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth)),end: endOfMonth(new Date(2024, currentMonth))});
    const lastPrevMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth - 1)), end: endOfMonth(new Date(2024, currentMonth - 1))}).slice(-(35 - currentMonthDays.length));
    const firstNextMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth + 1)), end: endOfMonth(new Date(2024, currentMonth + 1))}).slice(0, 35 - currentMonthDays.length);
    let daysToDisplay = [];
    if(currentMonthDays[0].getDay() == 1) {
        daysToDisplay = currentMonthDays.concat(firstNextMonthsDays) as any;
    } else if(currentMonthDays[0].getDay() != 1 && currentMonthDays[currentMonthDays.length - 1].getDay() != 0) {
        daysToDisplay = lastPrevMonthsDays.slice(- (currentMonthDays[0].getDay() - 1)).concat(currentMonthDays).concat(firstNextMonthsDays.slice(0, (currentMonthDays[0].getDay() - 1)));
    } else if(currentMonthDays[0].getDay() != 1 && currentMonthDays [currentMonthDays.length - 1].getDay() == 0) {
        daysToDisplay = lastPrevMonthsDays.concat(currentMonthDays);
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
            {/* {currentMonthDays[0].getDay() == 1 ? null : new Array(35 - currentMonthDays.length).fill([0,1]).map(n => n)} */}
            {/* {currentMonthDays.map((day, index) => {
                return <p key={index} className={
                    `
                    ${styles["day"]}
                    ${styles[day.toString().split(" ")[0]]}
                    ${isPast(day) || isSunday(day) ? styles["gone"] : ""}
                    ${isToday(day) ? styles["today"] : ""}
                    ${selected && isEqual(day, selected) ? styles["selected"] : ""}
                    `
                    }
                    onClick={()=>handleDaySelect(day)}
                    >{parseInt(day.toString().split(" ")[2])}</p>
            })} */}
            {daysToDisplay.map((day:any, index:number) => {
                return <p key={index} className={
                    `
                        ${styles["day"]}
                        ${!isSameMonth(day, currentMonthDays[0]) ? styles["prev-month"] : ""}
                        ${styles[day.toString().split(" ")[0]]}
                        ${isPast(day) || isSunday(day) ? styles["gone"] : ""}
                        ${isToday(day) ? styles["today"] : ""}
                        ${selected && isEqual(day, selected) ? styles["selected"] : ""}
                    `
                    }
                    onClick={()=>handleDaySelect(day)}
                    >{parseInt(day.toString().split(" ")[2])}</p>
            })}
        </div>
        {selected ? <p className={styles["chosen"]}>Tu turno es el {selected ? formatDate(selected) : null}</p> : null}
    </div>
}