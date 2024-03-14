import ImageSlider from "@/components/image-slider"
import Link from "next/link";
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button";
import styles from "./loading.module.css";
import Form from "@/components/form";
import Logo from "@/components/logo";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { loadingHook } from "./loadingHook";
export default function LoadingPage() {
  const [id, setId] = useState(0)
  const {data, loading, error} = loadingHook(id.toString());
  console.log(data)
  Object.keys(data).length === 0 && setTimeout
  return (
    <main className={styles["loading-page"]}>
      <div className={`${styles["add-container"]} ${data ? styles["data"] : ""} ${loading ? styles["loading"] : ""} ${error ? styles["error"] : ""}`} onClick={()=>setId(Math.floor(Math.random() * 20 + 1))}>
        {data ? "✔" : 
          loading ? <CircularProgress color="inherit" size={50}/> : 
          error ? "X" : 
          "+"
        }
      </div>
      <div className={styles["state-container"]}>
        <p className={`${data ? styles["data"] : ""}`}>{JSON.stringify(data)}</p>
        <p>{JSON.stringify(loading)}</p>
        <p className={`${error ? styles["error"] : ""}`}>{JSON.stringify(error)}</p>
      </div>
    </main>
  )
}
