import ImageSlider from "@/components/image-slider"
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button";
import styles from "./home.module.css";
import Form from "@/components/form";
export default function Home() {
  console.log("Restored")
  return (
    <main className={styles["home-page"]}>
      <ImageSlider imagesList={imagesList}/>
      <Form />
    </main>
  )
}
