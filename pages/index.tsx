import ImageSlider from "@/components/image-slider"
import Link from "next/link";
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button";
import styles from "./home.module.css";
import Form from "@/components/form";
import Logo from "@/components/logo";
import { useEffect, useState } from "react";
export default function Home() {
  const [hovered, setHovered] = useState(false);
  const scrollToSection = () => {
    const section = document.getElementById("form-section");
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <main className={styles["home-page"]}>
      <header className={styles["home-header"]}>
        <div className={styles["shop-container"]}>
          <p className={styles["link"]}  onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>SHOP</p>
          <div className={`${styles["tooltip-container"]} ${hovered ? styles["visible"] : ""}`}>
            <div className={styles["tooltip-triangle"]}></div>
            <p className={styles["advise"]}>Proximamente</p>
          </div>
        </div>
        <Logo size={45}/>
        <Link href={"/ashee"} className={styles["link"]}>GALERÍA</Link>
      </header>
      {/* <button onClick={scrollToSection}>click</button> */}
      <section className={styles["welcome"]}>
        <ImageSlider onClick={scrollToSection} imagesList={imagesList}/>
      </section>
      <section className={styles["form-section"]} id="form-section">
        <Form/>
      </section>
    </main>
  )
}
