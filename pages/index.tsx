import GallerySection from "@/components/gallery.section";
import ImageSlider from "@/components/image-slider";
import { imagesList } from "@/components/image-slider/images";
import ServiceSection from "@/components/service.section";

export default function Home() {
  return (
    <div>
      {/* <GallerySection /> */}
      <div style={{ padding: "5rem" }}></div>
      <ServiceSection />
      {/* <ImageSlider imagesList={imagesList} /> */}
    </div>
  );
}
