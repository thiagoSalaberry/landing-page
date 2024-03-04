import ImageSlider from "@/components/image-slider"
import { imagesList } from "@/components/image-slider/images"
import ArrowButton from "@/components/arrow-button"
export default function Home() {
  return (
    <div>
      <ImageSlider imagesList={imagesList}/>
    </div>
  )
}
