import GallerySection from "@/components/gallery.section";
import ImageSlider from "@/components/image-slider";
import { imagesList } from "@/components/image-slider/images";

export default function Home() {
  return (
    <div>
      <ImageSlider imagesList={imagesList} />
      <GallerySection />
    </div>
  );
}
