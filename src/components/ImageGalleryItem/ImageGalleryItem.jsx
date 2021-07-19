import { ImageGalleryItemList, ImageGalleryItemImg } from './ImageGalleryItem.styles';
import PropTypes from 'prop-types';


export function ImageGalleryItem({
  onImageClick,
  alt,
  image: { webformatURL, largeImageURL },
}) {
  return (
    <ImageGalleryItemList>
      <ImageGalleryItemImg
        src={webformatURL}
        alt={alt}
        onClick={e => onImageClick(e, largeImageURL)}
      />
    </ImageGalleryItemList>
  )
}
ImageGalleryItem.propTypes = {
  ImageGalleryItemImg: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }).isRequired,
    alt: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
