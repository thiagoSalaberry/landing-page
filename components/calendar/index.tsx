import { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import dateFns, { isSunday, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, formatRFC7231, isPast, isToday, isEqual } from "date-fns";
export default function Calendar() {
    const months:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const [selected, setSelected] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState<number>(getMonth(new Date()));
    const thisMonth = getMonth(new Date());
    const handleDaySelect = (day: Date) => {
        if(isPast(day) || isSunday(day)) return;
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
    // useEffect(()=>{
    //     console.log(selected)
    // }, [selected]);
    const prevMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth - 1)), end: endOfMonth(new Date(2024, currentMonth - 1))});
    const currentMonthDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth)),end: endOfMonth(new Date(2024, currentMonth))});
    const nextMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth + 1)), end: endOfMonth(new Date(2024, currentMonth + 1))});
    // console.log({prevMonth: months[prevMonth], nextMonth: months[nextMonth]})
    // const prevFill = new Array.fill()
    // console.log({primerDia: currentMonthDays[0].getDay()});
    /*
        Debo devolver 3 arrays => [ultimosDiasDelMesAnterior],[diasDelMesActual],[primerosDiasDelProximoMes]
        Hay 3 posibilidades: 
            - Si el primer día del mes actual es lunes, el array es el siguiente = [diasDelMesActual],[primerosDiasDelProximoMes]
            - Si el primer día del mes actual NO es lunes y el último NO es domingo, el array es el siguiente = [ultimosDiasDelMesAnterior],[diasDelMesActual],[primerosDiasDelProximoMes]
            - Si el primer día del mes actual NO es lunes Y el último es domingo, el array es el siguiente = [ultimosDiasDelMesAnterior],[diasDelMesActual]
    */
    // console.log({ultimosDias: prevMonthsDays.slice(-(35 - currentMonthDays.length))})
    // console.log({primerDiaDeMarzo: startOfMonth(new Date(2024, 4)).getDay()});
    const lastPrevMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth - 1)), end: endOfMonth(new Date(2024, currentMonth - 1))}).slice(-(35 - currentMonthDays.length));
    const firstNextMonthsDays = eachDayOfInterval({start: startOfMonth(new Date(2024, currentMonth + 1)), end: endOfMonth(new Date(2024, currentMonth + 1))}).slice(-(35 - currentMonthDays.length));
    // console.log({lastPrevMonthsDays})
    // console.log({firstNextMonthsDays})
    const prevMonthlastDay = endOfMonth(new Date(2024, currentMonth - 1)).getDay();
    const nextMonthFirstDay = startOfMonth(new Date(2024, currentMonth + 1)).getDay();
    // console.log({ultimoDia: prevMonthlastDay, primerDia: nextMonthFirstDay})
    const daysToDisplay = currentMonthDays[0].getDay() == 1 ? 
        [currentMonthDays].concat(firstNextMonthsDays)
        : currentMonthDays[0].getDay() != 1 && currentMonthDays[currentMonthDays.length - 1].getDay() != 6 ?
        [lastPrevMonthsDays].concat(currentMonthDays).concat(firstNextMonthsDays)
        :
        [lastPrevMonthsDays].concat(currentMonthDays)
    ;
    console.log({daysToDisplay});
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
            {currentMonthDays.map((day, index) => {
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
            })}
        </div>
        {selected ? <p className={styles["chosen"]}>Tu turno es el {selected ? formatDate(selected) : null}</p> : null}
    </div>
}