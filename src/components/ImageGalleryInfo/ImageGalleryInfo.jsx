import { Component } from 'react'
import { fetchImages } from '../../servises/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { ImageGalleryInfoTitte } from './ImageGalleryInfo.styles';
import LoaderSpin from '../Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}
export default class ImageGalleryInfo extends Component{
  state = {
    image: null,
    error: null,
    page: 1,
    status: Status.IDLE
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    
    const prevPage = prevState.page;
    const nextPage = this.state.page;


    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      this.resetPage()

      fetchImages(nextName, nextPage)
        .then((data) => {
          this.setState({ image: data.hits, status: Status.RESOLVED })
          if (this.state.image.length === 0) {
            error('Введите запрос');
          }
        })
      .catch((error) => this.setState({error:true, status: Status.REJECTED }))
    }
    if (prevPage !== nextPage) {
      fetchImages(nextName, nextPage)
        .then((data) => {
          this.setState({ status: Status.RESOLVED })
          this.setState((prevState) => {
            return {image:[...prevState.image, ...data.hits]}
          })
        })
       .catch((error)=>this.setState({error: true, status: Status.REJECTED }))
    }
  }
  onButtonMore = (event) => {
    this.setState((prevState) => {
      return {page: prevState.page + 1}
    })
  }
  resetPage = () => {
    this.setState({
      page: 1,
    })
  }
  render() {
    const {image, error, status} = this.state
    const { imageName, onImageClick } = this.props
    
    if (status === 'idle') {
      return <ImageGalleryInfoTitte>Введите запрос</ImageGalleryInfoTitte> ;
    }
    if (status === 'pending') {
      return (
        <>
          <LoaderSpin/>
        </>
      )
    }
    if (status === 'rejected') {
      return
      <>
        {error.message}
      </>
     }

    if (status === 'resolved'){
      return (
        <>
          <ImageGallery
            images={image}
            imageName={imageName}
            onImageClick={onImageClick}
          />
          <Button onClick={this.onButtonMore}>
          </Button>
        </>
      )
    }
  }
}
