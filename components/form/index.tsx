import React, { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";
import InputField from "@/ui/inputs";
import TextAreaField from "@/ui/textarea";
import SelectField from "@/ui/select";
import ImageDrop from "../img-drop";
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
        size: 0,
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
        if(towards === "next") setCurrentStep((prevStep) => prevStep + 1);
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
    ];
    const formSteps:JSX.Element[] = [
        (
            <>
                <InputField value={form.name} onChange={(value)=>handleInputChange("name", value)} type="text" label="NOMBRE" name="name" placeholder="Nombre" />
                <InputField value={form.email} onChange={(value)=>handleInputChange("email", value)} type="email" label="E-MAIL" name="email" placeholder="E-Mail" />
            </>
        ),
        (
            <>
                <TextAreaField value={form.idea} onChange={(value)=>handleInputChange("idea", value)} type="text" label="TU IDEA" name="idea" placeholder="Detallá tu idea acá" />
            </>
        ),
        (
            <>
                <InputField value={form.body} onChange={(value)=>handleInputChange("body", value)} type="text" label="PARTE DEL CUERPO" name="body" placeholder="ej. brazo" />
                <InputField value={form.size} onChange={(value)=>handleInputChange("size", value)} type="number" label="TAMAÑO (en cm)" name="size" placeholder="ej. 15cm" />
                <SelectField onChange={handleSelectChange} selected={form.color} label="BLACK & GREY o COLOR" name="color" />
            </>
        ),
        (
            <>
                <ImageDrop images={form.images!} onChange={handleImageUpload} onClick={handleDelete}/>
            </>
        ),
    ]
    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <div className={styles["form-header"]}>
                {formHeaders[currentStep]}
            </div>
            {formSteps[currentStep]}
            <div className={styles["buttons-container"]}>
                {currentStep > 0 ? <button onClick={()=>handleStep("back")} className={styles["back-button"]}>Volver</button> : null}
                <button onClick={()=>handleStep("next")} className={styles["next-button"]}>Siguiente</button>
            </div>
        </form>
    )
}