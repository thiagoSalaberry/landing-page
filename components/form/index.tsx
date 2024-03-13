import React, { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";
import InputField from "@/ui/inputs";
import TextAreaField from "@/ui/textarea";
import SelectField from "@/ui/select";
import ImageDrop from "../img-drop";
import Calendar  from "@/components/calendar";
import { formatDate } from "@/lib/formatDate";
import { CircularProgress } from "@mui/material";
import { isToday } from "date-fns";
import Router from "next/router";
export default function Form() {
    const [form, setForm] = useState<FormProps>({
        name: "",
        email: "",
        phone: "",
        idea: "",
        body: "",
        size: "",
        color: false,
        images: [],
        date: new Date()
    });
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [missing, setMissing] = useState<{
            name: boolean,
            email: boolean,
            phone: boolean,
            idea: boolean,
            body: boolean,
            size: boolean,
            date: boolean
        }>(
        {
            name: false,
            email: false,
            phone: false,
            idea: false,
            body: false,
            size: false,
            date: false
        }
    );
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("Submit")
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
        if(towards === "back") setCurrentStep((prevStep) => prevStep - 1);
        if(currentStep == 0 && (!form.name || !form.email || !form.phone)) {
            const aCambiar = {
                name:false,
                email:false,
                phone:false
            };
            const faltantes = Object.entries(form).slice(0, 3).filter(tupla => tupla[1] == "").map(tupla => tupla[0]);
            faltantes.forEach(prop => {
                aCambiar[prop as keyof typeof aCambiar] = true;
            })
            setMissing({...missing, name: aCambiar.name, email: aCambiar.email, phone: aCambiar.phone});
            return;
        };
        if(currentStep == 1 && !form.idea) {
            setMissing({...missing, idea: true});
            return;
        }
        if(currentStep == 2 && (!form.body || !form.size)) {
            const aCambiar = {
                body: false,
                size: false
            };
            const faltantes = Object.entries(form).slice(4, 6).filter(tupla => tupla[1] == "").map(tupla => tupla[0]);
            faltantes.forEach(prop => {
                aCambiar[prop as keyof typeof aCambiar] = true;
            });
            setMissing({...missing, body: aCambiar.body, size: aCambiar.size})
            return;
        };
        if(currentStep == 4 && isToday(form.date)) {
            setMissing({...missing, date:true});
            return
        }
        if(towards === "next") {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    const goToStep = (step: "idea" | "images") => {
        if(step == "idea") setCurrentStep(1);
        if(step == "images") setCurrentStep(3);
    };
    const handleDateSelect = (day:Date) => {
        setForm({
            ...form,
            date: day
        });
        setMissing({...missing, date: false});
    };
    if(currentStep == 6) {
        setTimeout(()=>{
            setCurrentStep(7)
        }, 2000)
    };
    if(currentStep == 7) {
        setTimeout(()=>{
            Router.reload();
        }, 5000)
    };
    const formHeaders:JSX.Element[] = [
        (
            <>
                <h3 className={styles["header-title"]}>Información personal</h3>
                <p className={styles["header-desc"]}>Ingresá tu nombre, tu E-Mail y tu celular.</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Tu idea</h3>
                <p className={styles["header-desc"]}>Explicá tu idea lo mejor que puedas</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Detalles del tattoo</h3>
                <p className={styles["header-desc"]}>Definí la zona del cuerpo, tamaño y color</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Imágenes de referencia</h3>
                <p className={styles["header-desc"]}>Si tenés imágenes de referencia, cargalas acá</p>
            </>
        ),
        (
            <>
                <h3 className={styles["header-title"]}>Turnos disponibles</h3>
                <p className={styles["header-desc"]}>Elegí la fecha que más te convenga</p>
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
                <InputField value={form.name} missing={missing.name} onChange={(value)=>handleInputChange("name", value)} type="text" label="Nombre" name="name" placeholder="Nombre" required/>
                <InputField value={form.email} missing={missing.email} onChange={(value)=>handleInputChange("email", value)} type="email" label="E-Mail" name="email" placeholder="E-Mail" required/>
                <InputField value={form.phone} missing={missing.phone} onChange={(value)=>handleInputChange("phone", value)} type="number" label="Celular" name="phone" placeholder="12345678" required/>
            </>
        ),
        (
            <>
                <TextAreaField value={form.idea} missing={missing.idea} onChange={(value)=>handleInputChange("idea", value)} type="text" label="Idea" name="idea" placeholder="Detallá tu idea acá" required/>
            </>
        ),
        (
            <>
                <InputField value={form.body} missing={missing.body} onChange={(value)=>handleInputChange("body", value)} type="text" label="Parte del cuerpo" name="body" placeholder="ej. brazo" required/>
                <InputField value={form.size} missing={missing.size} onChange={(value)=>handleInputChange("size", value)} type="number" label="Tamaño (en cm)" name="size" placeholder="ej. 15cm" required/>
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
                 <Calendar onClick={handleDateSelect} selectedDay={form.date ? form.date : null} missing={missing.date}/>
            </>
        ),
        (
            <>
                <div className={styles["summary-container"]}>
                    <div className={styles["summary-section"]}>
                        <p className={styles["summary-data"]}>Nombre:<span className={styles["summary-value"]}>{form.name}</span></p>
                        <p className={styles["summary-data"]}>E-Mail:<span className={styles["summary-value"]}>{form.email}</span></p>
                        <p className={styles["summary-data"]}>Celular:<span className={styles["summary-value"]}>{form.phone}</span></p>
                    </div>
                    <div className={styles["divider"]}></div>
                    <div className={styles["summary-section"]}>
                        <p className={styles["summary-data"]}>Idea:<button onClick={()=>goToStep("idea")} className={styles["summary-button"]}>Ver</button></p>
                    </div>
                    <div className={styles["divider"]}></div>
                    <div className={styles["summary-section"]}>
                        <p className={styles["summary-data"]}>Parte del cuerpo:<span className={styles["summary-value"]}>{form.body}</span></p>
                        <p className={styles["summary-data"]}>Tamaño:<span className={styles["summary-value"]}>{form.size} cm</span></p>
                        <p className={styles["summary-data"]}>Color:<span className={styles["summary-value"]}>{form.color ? "A color" : "Black & Grey"}</span></p>
                    </div>
                    <div className={styles["divider"]}></div>
                    <div className={styles["summary-section"]}>
                        <p className={styles["summary-data"]}>Imágenes:<button onClick={()=>goToStep("images")} className={styles["summary-button"]}>Ver</button></p>
                    </div>
                    <div className={styles["divider"]}></div>
                    <div className={styles["summary-section"]}>
                        <p className={styles["summary-data"]}>Fecha:<span className={styles["summary-value"]}>{formatDate(form.date)}</span></p>
                    </div>
                </div>
                <div className={styles["total"]}>
                    <p className={styles["summary-data"]}>Precio estimado:<span className={styles["summary-value"]}>${form.color ? (parseInt(form.size) * 1500 * 1.5).toLocaleString() : (parseInt(form.size) * 1500).toLocaleString()}</span></p>
                </div>
            </>
        ),
        (
            <div className={styles["loading-step"]}>
                <CircularProgress size={50}/>
                <p className={styles["loading-message"]}>Estamos agendando su turno, espere por favor...</p>
            </div>
        ),
        (
            <div className={styles["thanks-step"]}>
                <img src="/thanks.png" alt="" />
                <h2 className={styles["thanks-title"]}>¡ Gracias !</h2>
                <p className={styles["thanks-message"]}>Gracias por agendar tu turno.<br/>Te enviaremos un recordatorio cuando la fecha esté cerca.<br/>¡Nos vemos!</p>
            </div>
        ),
    ];
    useEffect(()=>{
        console.log({missing})
    }, [missing])
    return (
        <section className={styles["form-section"]}>
            <div className={styles["steps-section"]}>
                <div className={styles["steps-container"]}>
                    {formSteps.slice(0,6).map((_, index) => {
                        return <p key={index} className={`${styles["step"]} ${currentStep == index ? styles["filled"] : styles["empty"]}`}>{index + 1}</p>
                    })}
                </div>
            </div>
            <form className={styles["form"]} onSubmit={handleSubmit}>
                <div className={styles["form-header"]}>
                    {formHeaders[currentStep]}
                </div>
                <div className={styles["inputs-container"]}>
                    {formSteps[currentStep]}
                </div>
                {currentStep > 5 ? null : (
                    <div className={styles["buttons-container"]}>
                        {currentStep > 0 ? <button type="button" onClick={()=>handleStep("back")} className={styles["back-button"]}>Volver</button> : null}
                        <button type="button" onClick={()=>handleStep("next")} /*onMouseOver={()=>console.log("Completá los campos")}*/ className={`${styles["next-button"]} ${false ? styles["disabled"] : ""}`}>{currentStep == 5 ? "Confirmar" : "Siguiente"}</button>
                    </div>
                    )}
            </form>
        </section>
    )
}