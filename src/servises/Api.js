import axios from 'axios';

const baseURL = 'https://pixabay.com/api';
const KEY = '21758242-df60cf310fb09062fe07e2a40';
const per_page = 12;

const fetchImages = (imageName, page = 1) => {
  return axios
    .get(
      `${baseURL}?q=${imageName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => response.data.hits);
};

const imagesApi = {
  fetchImages,
};

export default imagesApi;
