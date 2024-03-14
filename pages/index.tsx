import ImageSlider from "@/components/image-slider"
import Link from "next/link";
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button";
import styles from "./home.module.css";
import Form from "@/components/form";
import Logo from "@/components/logo";
export default function Home() {
  return (
    <main className={styles["home-page"]}>
      <header className={styles["home-header"]}>
        <Link href={"/ashee"} className={styles["link"]}>SHOP</Link>
        <Logo size={45}/>
        <Link href={"/ashee"} className={styles["link"]}>PORTFOLIO</Link>
      </header>
      <section className={styles["welcome"]}>
        <ImageSlider imagesList={imagesList}/>
      </section>
      <section className={styles["form-section"]}>
        <Form/>
      </section>
    </main>
  )
}
