import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import Searchbar from "./components/Searchbar/Searchbar";


export default class App extends Component{
  state = {
    imageName: '',
    showModal: false,
    largeImageURL: '',
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleFormSubmit }/>
       <ToastContainer autoClose={3000} />
      </div>
    );
  }
}