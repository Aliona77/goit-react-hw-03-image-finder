import PropTypes from 'prop-types';
import { ImageGalleryList } from "./ImageGallery.styles";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";



export default function ImageGallery({ images, alt, onImageClick }) {
  return (
    <ImageGalleryList>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          alt={alt}
          onImageClick={onImageClick}
      
        />
      ))}

    </ImageGalleryList>
  )
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};


