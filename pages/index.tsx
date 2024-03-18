import Link from "next/link";
import ArrowButton from "@/components/arrow-button";
import styles from "./home.module.css";
import Form from "@/components/form";
import Logo from "@/components/logo";
import { useEffect, useState } from "react";
import GallerySection from "@/components/gallery.section";
import ImageSlider from "@/components/image-slider";
import { imagesList } from "@/components/image-slider/images";
import ServiceSection from "@/components/service.section";
export default function Home() {
  const [hovered, setHovered] = useState(false);
  const scrollToSection = () => {
    const formSection = document.getElementById("form-section");
    if(formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <main className={styles["home-page"]}>
      {/* <header className={styles["home-header"]}>
        <div className={styles["shop-container"]}>
          <p className={styles["link"]}  onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>SHOP</p>
          <div className={`${styles["tooltip-container"]} ${hovered ? styles["visible"] : ""}`}>
            <div className={styles["tooltip-triangle"]}></div>
            <p className={styles["advise"]}>Proximamente</p>
          </div>
        </div>
        <Logo size={45}/>
        <Link href={"/ashee"} className={styles["link"]}>PORTFOLIO</Link>
      </header> */}
      <section className={styles["welcome"]}>
        <ImageSlider onClick={scrollToSection} imagesList={imagesList}/>
      </section>
      <ServiceSection />
      <GallerySection />
      <section className={styles["form-section"]} id="form-section">
        <Form/>
      </section>
    </main>    
  );
}
