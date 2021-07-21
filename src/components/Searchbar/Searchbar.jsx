import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './Searchbar.styles';

export function Searchbar({ onSubmit }) {
  const handleSearch = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.imageName.value.trim();

    if (!searchQuery) {
      e.target.elements.imageName.value = null;
    }

    onSubmit(searchQuery);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSearch}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="imageName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};