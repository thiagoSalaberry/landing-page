import React, { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";
import InputField from "@/ui/inputs";
import TextAreaField from "@/ui/textarea";
import SelectField from "@/ui/select";
import ImageDrop from "../img-drop";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const getWeekDay = (englishDay:string):string => {
    const translate = {
        Mon: "Lunes",
        Tue: "Martes",
        Wed: "Miércoles",
        Thu: "Jueves",
        Fri: "Viernes",
        Sat: "Sábado",
        Sun: "Domingo"
    };
    return translate[englishDay as keyof typeof translate];
};
const getMonth = (monthNumber:number):string => {
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"];
    return months[monthNumber];
}
export default function Form() {
    const [form, setForm] = useState<FormProps>({
        name: "",
        email: "",
        idea: "",
        body: "",
        size: "",
        color: false,
        images: [],
        date: new Date()
    });
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [value, onChange] = useState<Value>(new Date());
    const [selectedDay, setSelectedDay] = useState("");
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    };
    const handleInputChange = (fieldName: keyof FormProps, value: string | number) => {
        setForm({
            ...form,
            [fieldName]: value
        })
    };
    const handleSelectChange = () => {
        setForm({
            ...form,
            color: !form.color
        })
    };
    const handleImageUpload = (imageUrl:string) => {
        setForm({
            ...form,
            images: [...form.images!, imageUrl]
        })
    };
    const handleDelete = (index:number) => {
        setForm({
            ...form,
            images:  form.images!.filter((_, i) => i !== index)
        })
    }
    const handleStep = (towards: "next" | "back") => {
        if(towards === "next") {
            setCurrentStep((prevStep) => prevStep + 1);
        }
        if(towards === "back") setCurrentStep((prevStep) => prevStep - 1);
    };
    console.log(form)
    const formHeaders:JSX.Element[] = [
        (
            <>
                <h3 className={styles["header-title"]}>Información personal</h3>
                <p className={styles["header-desc"]}>Ingresá tu nombre y tu E-Mail</p>
                <p className={styles["header-step"]}>{currentStep + 1} / 5</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Tu idea</h3>
                <p className={styles["header-desc"]}>Explicá tu idea lo mejor que puedas</p>
                <p className={styles["header-step"]}>{currentStep + 1} / 5</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Detalles del tattoo</h3>
                <p className={styles["header-desc"]}>Definí la zona del cuerpo, tamaño y color</p>
                <p className={styles["header-step"]}>{currentStep + 1} / 5</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Imágenes de referencia</h3>
                <p className={styles["header-desc"]}>Si tenés imágenes de referencia, cargalas acá</p>
                <p className={styles["header-step"]}>{currentStep + 1} / 5</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Turnos disponibles</h3>
                <p className={styles["header-desc"]}>Elegí la fecha que más te convenga</p>
                <p className={styles["header-step"]}>{currentStep + 1} / 5</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Resumen</h3>
                <p className={styles["header-desc"]}>Revisá todos los datos antes de confirmar</p>
            </>
        ),
    ];
    const formSteps:JSX.Element[] = [
        (
            <>
                <InputField value={form.name} onChange={(value)=>handleInputChange("name", value)} type="text" label="Nombre" name="name" placeholder="Nombre" required={true}/>
                <InputField value={form.email} onChange={(value)=>handleInputChange("email", value)} type="email" label="E-Mail" name="email" placeholder="E-Mail" required={true}/>
            </>
        ),
        (
            <>
                <TextAreaField value={form.idea} onChange={(value)=>handleInputChange("idea", value)} type="text" label="Tu idea" name="idea" placeholder="Detallá tu idea acá" />
            </>
        ),
        (
            <>
                <InputField value={form.body} onChange={(value)=>handleInputChange("body", value)} type="text" label="Parte del cuerpo" name="body" placeholder="ej. brazo" />
                <InputField value={form.size} onChange={(value)=>handleInputChange("size", value)} type="number" label="Tamaño (en cm)" name="size" placeholder="ej. 15cm" />
                <SelectField onChange={handleSelectChange} selected={form.color} label="Black & Grey o Color" name="color" />
            </>
        ),
        (
            <>
                <ImageDrop images={form.images!} onChange={handleImageUpload} onClick={handleDelete}/>
            </>
        ),
        (
            <>
                 <Calendar
                    className={styles["calendar"]} 
                    tileClassName={styles["tile"]}
                    onClickDay={(value) => setSelectedDay(`Tu turno será el ${getWeekDay(value.toDateString().split(" ")[0])} ${value.getDate()} de ${getMonth(value.getMonth())} del ${value.getFullYear()}`)}
                />
                {selectedDay ? <p>{selectedDay}</p> : null}
            </>
        ),
        (
            <div className={styles["summary-container"]}>
                <div className={styles["summary-section"]}>
                    <p className={styles["summary-data"]}>Nombre:<span className={styles["summary-value"]}>{form.name}</span></p>
                    <p className={styles["summary-data"]}>E-Mail:<span className={styles["summary-value"]}>{form.email}</span></p>
                </div>
                <div className={styles["summary-section"]}>
                    <p className={styles["summary-data"]}>Idea:<span className={styles["summary-value"]}>{form.idea}</span></p>
                </div>
                <div className={styles["summary-section"]}>
                    <p className={styles["summary-data"]}>Parte del cuerpo:<span className={styles["summary-value"]}>{form.body}</span></p>
                    <p className={styles["summary-data"]}>Tamaño:<span className={styles["summary-value"]}>{form.size} cm</span></p>
                    <p className={styles["summary-data"]}>Color:<span className={styles["summary-value"]}>{form.color ? "A color" : "Black & Grey"}</span></p>
                </div>
                <div className={styles["summary-section"]}>
                    <p className={styles["summary-data"]}>Fecha:<span className={styles["summary-value"]}>{JSON.stringify(form.date)}</span></p>
                </div>
            </div>
        ),
    ]
    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <div className={styles["form-header"]}>
                {formHeaders[currentStep]}
            </div>
            <div className={styles["inputs-container"]}>
                {formSteps[currentStep]}
            </div>
            <div className={styles["buttons-container"]}>
                {currentStep > 0 ? <button onClick={()=>handleStep("back")} className={styles["back-button"]}>Volver</button> : null}
                <button onClick={()=>handleStep("next")} className={styles["next-button"]}>{currentStep == 5 ? "Confirmar" : "Siguiente"}</button>
            </div>
        </form>
    )
}