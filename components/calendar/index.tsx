import { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import dateFns, { isSunday, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, formatRFC7231, isPast, isToday } from "date-fns";
const days = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
];
const daysObj:CalendarDay[] = [
    {fecha: "02-25-24"},
    {fecha: "02-26-24"},
    {fecha: "02-27-24"},
    {fecha: "02-28-24"},
    {fecha: "02-29-24"},
    {fecha: "03-01-24", isCurrentMonth: true, gone: true},
    {fecha: "03-02-24", isCurrentMonth: true, gone: true},
    {fecha: "03-03-24", isCurrentMonth: true, gone: true},
    {fecha: "03-04-24", isCurrentMonth: true, gone: true},
    {fecha: "03-05-24", isCurrentMonth: true, gone: true},
    {fecha: "03-06-24", isCurrentMonth: true, gone: true},
    {fecha: "03-07-24", isCurrentMonth: true, gone: true},
    {fecha: "03-08-24", isCurrentMonth: true, gone: true},
    {fecha: "03-09-24", isCurrentMonth: true, gone: true},
    {fecha: "03-10-24", isCurrentMonth: true, gone: true},
    {fecha: "03-11-24", isCurrentMonth: true, gone: true},
    {fecha: "03-12-24", isCurrentMonth: true, today: true, taken: true},
    {fecha: "03-13-24", isCurrentMonth: true, taken: true},
    {fecha: "03-14-24", isCurrentMonth: true, taken: true},
    {fecha: "03-15-24", isCurrentMonth: true, taken: true},
    {fecha: "03-16-24", isCurrentMonth: true},
    {fecha: "03-17-24", isCurrentMonth: true},
    {fecha: "03-18-24", isCurrentMonth: true},
    {fecha: "03-19-24", isCurrentMonth: true},
    {fecha: "03-20-24", isCurrentMonth: true, taken: true},
    {fecha: "03-21-24", isCurrentMonth: true, taken: true},
    {fecha: "03-22-24", isCurrentMonth: true},
    {fecha: "03-23-24", isCurrentMonth: true},
    {fecha: "03-24-24", isCurrentMonth: true},
    {fecha: "03-25-24", isCurrentMonth: true, taken: true},
    {fecha: "03-26-24", isCurrentMonth: true, taken: true},
    {fecha: "03-27-24", isCurrentMonth: true, taken: true},
    {fecha: "03-28-24", isCurrentMonth: true, taken: true},
    {fecha: "03-29-24", isCurrentMonth: true, taken: true},
    {fecha: "03-30-24", isCurrentMonth: true},
    {fecha: "03-31-24", isCurrentMonth: true},
    {fecha: "04-01-24"},
    {fecha: "04-02-24"},
    {fecha: "04-03-24"},
    {fecha: "04-04-24"},
    {fecha: "04-05-24"},
    {fecha: "04-06-24"},
];
export default function Calendar() {
    const months:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const [selected, setSelected] = useState<number | null>(null);
    const [currentMonth, setCurrentMonth] = useState<number>(getMonth(new Date()));
    const thisMonth = getMonth(new Date());
    const handleDaySelect = (day: CalendarDay, index:number) => {
        if(day.gone || day.taken || !day.isCurrentMonth) return;
        setSelected(index);
    };
    const handleMonth = (towards: "prev" | "next") => {
        if(currentMonth == thisMonth && towards == "prev") return;
        if(currentMonth == thisMonth + 3 && towards == "next") return; 
        if(towards == "next") setCurrentMonth(prevMonth => prevMonth + 1);
        if(towards == "prev" && thisMonth) setCurrentMonth(prevMonth => prevMonth - 1);
    };
    const formatDate = (date:string):string => {
        const [weekDay, fecha, month, year] = formatRFC7231(date).split(" ");
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
        return `${dayMap[day]} ${fecha} de ${months.find(m => m.includes(month))} del ${year}`;
    };
    useEffect(()=>{
        const firstDayTheMonth = startOfMonth(new Date(2024, currentMonth));
        const lastDayTheMonth = endOfMonth(new Date(2024, currentMonth));
        const diasDelMes = eachDayOfInterval({start: firstDayTheMonth, end: lastDayTheMonth});
        // console.log(`Dias del mes de ${months[currentMonth]}:`, diasDelMes.map(day => {return {fecha: day.toString().split(" ")[2], dia: day.toString().split(" ")[0]}}));
    }, [currentMonth]);
    console.log("Hoy", isPast(new Date(2024, 2, 11)))
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
            <span className={styles["week-day"]}>Dom</span>
            <span className={styles["week-day"]}>Lun</span>
            <span className={styles["week-day"]}>Mar</span>
            <span className={styles["week-day"]}>Mié</span>
            <span className={styles["week-day"]}>Jue</span>
            <span className={styles["week-day"]}>Vie</span>
            <span className={styles["week-day"]}>Sáb</span>
        </div>
        <div className={styles["calendar-days"]}>
            {daysObj.map((d, index) => {
                return <div key={index}
                    className={
                        `${styles["day"]}
                        ${d.isCurrentMonth ? styles["this-month"] : ""}
                        ${d.today ? styles["today"] : ""}
                        ${d.gone || isSunday(d.fecha) && d.isCurrentMonth ? styles["gone"] : ""}
                        ${d.taken ? styles["taken"] : ""}
                        ${selected == index && !d.taken && !d.gone && d.isCurrentMonth ? styles["selected"] : ""}
                        `
                    }
                    onClick={()=>handleDaySelect(d, index)}
                >{d.fecha.split("-")[1]}</div>
            })}
        </div>
        {selected ? <p className={styles["chosen"]}>Tu turno es el {selected ? formatDate(daysObj[selected].fecha) : null}</p> : null}
        <div className={styles["segundo"]}>
            <div className={styles["segundo-week-days"]}>
                <span className={`${styles["Mon"]} ${styles["fixed"]}`}>Lun</span>
                <span className={`${styles["Tue"]} ${styles["fixed"]}`}>Mar</span>
                <span className={`${styles["Wed"]} ${styles["fixed"]}`}>Mié</span>
                <span className={`${styles["Thu"]} ${styles["fixed"]}`}>Jue</span>
                <span className={`${styles["Fri"]} ${styles["fixed"]}`}>Vie</span>
                <span className={`${styles["Sat"]} ${styles["fixed"]}`}>Sáb</span>
                <span className={`${styles["Sun"]} ${styles["fixed"]}`}>Dom</span>
            </div>
            {eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth)), end: endOfMonth(new Date(2024, currentMonth))}).map((day, index) => {
                const randomNumber = (Math.floor(Math.random() * 3) + 1);
                console.log(randomNumber == 3);
                return <p
                        className={
                            `
                                ${styles[day.toString().split(" ")[0]]}
                                ${isPast(day) || isSunday(day) ? styles["gone"] : ""}
                                ${isToday(day) ? styles["today"] : ""}
                                ${randomNumber == 3 && !isPast(day) && !isSunday(day) ? styles["taken"] : ""}
                            `
                        }
                        key={index}
                        >{day.toString().split(" ")[2]}</p>
            })}
        </div>
    </div>
}