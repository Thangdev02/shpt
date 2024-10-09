import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CSS/imageGallery.css";
// Import your images here
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
];

const ImageSlider = () => {
  return (
    <div className="image-slider" style={{padding:'8% 0'}}>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={3000} // 3 seconds interval between slides
        slideDuration={500} // 0.5 second transition duration
      />
    </div>
  );
};

export default ImageSlider;
