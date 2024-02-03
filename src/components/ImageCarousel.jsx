import baby from "../assets/baby.jpg";
import babyThumbnail from "../assets/baby-thumbnail.jpg";
import consultation from "../assets/consultation.jpg";
import consultationThumbnail from "../assets/consultation-thumbnail.jpg";
import microscope from "../assets/microscope.jpg";
import microscopeThumbnail from "../assets/microscope-thumbnail.jpg";
import xray from "../assets/xray.jpg";
import xrayThumbnail from "../assets/xray-thumbnail.jpg";
import paed from "../assets/paed.jpg";
import paedThumbnail from "../assets/paed-thumbnail.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: consultation,
    thumbnail: consultationThumbnail,
  },
  {
    original: microscope,
    thumbnail: microscopeThumbnail,
  },
  {
    original: paed,
    thumbnail: paedThumbnail,
  },
  {
    original: xray,
    thumbnail: xrayThumbnail,
  },
  {
    original: baby,
    thumbnail: babyThumbnail,
  },
];

const ImageCarousel = () => {
  return <ImageGallery items={images} original thumbnail />;
};
export default ImageCarousel;
