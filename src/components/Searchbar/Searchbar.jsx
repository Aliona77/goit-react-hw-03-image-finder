import { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styles';
import { toast } from 'react-toastify';



export default class Searchbar extends Component{
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Введите запрос');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchbarHeader>
      <SearchForm onSubmit={this.handleSubmit} >
       <SearchFormButton type="submit">
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
      type="text"
      autocomplete="off"
      autofocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.imageName}
          >
    </SearchFormInput>
  </SearchForm>
</SearchbarHeader>

    );
  }
}
