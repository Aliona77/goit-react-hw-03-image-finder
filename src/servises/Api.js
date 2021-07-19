export function fetchImages(name, page) {
  const KEY = '21758242-df60cf310fb09062fe07e2a40';
  const URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`;
  return fetch(URL).then(responce => {
    if (responce.ok) {
      return Response.json();
    }
    return Promise.reject(new Error('По вашему запросу нет результатов'));
  });
}
