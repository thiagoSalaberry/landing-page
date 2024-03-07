import ImageSlider from "@/components/image-slider"
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button";
import styles from "./home.module.css";
import Form from "@/components/form";
export default function Home() {
  return (
    <main className={styles["home-page"]}>
      <ImageSlider imagesList={imagesList}/>
      <Form/>
      {/* <section className={styles["welcome"]}>
        <button>Left</button>
        <div>
          <h1>TEOXYS TATTOO</h1>
          <p>It’s not all about the tools, it’s about design, precision and attention to detail. We make sure Teoxys excels at all four.</p>
          <button>Book your session</button>
        </div>
        <button>Right</button>
      </section> */}
    </main>
  )
}
