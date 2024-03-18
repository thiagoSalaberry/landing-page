import ImageSlider from "@/components/image-slider"
import Link from "next/link";
import { imagesList } from "@/components/image-slider/images"
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
        <Link href={"/ashee"} className={styles["link"]}>PORTFOLIO</Link>
      </header>
      <section className={styles["welcome"]}>
        <ImageSlider imagesList={imagesList}/>
      </section>
      <section className={styles["form-section"]}>
        <Form/>
      </section>
      <div>
        {/* <GallerySection /> */}
        <div style={{ padding: "5rem" }}></div>
        <ServiceSection />
        {/* <ImageSlider imagesList={imagesList} /> */}
      </div>
    </main>    
  );
}
