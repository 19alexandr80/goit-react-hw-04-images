import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
} from 'components/searchbar/SearchbarStyled.styled';

export const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const inputChange = e => {
    setName(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    if (!name) {
      alert('name please');
      return;
    }
    onSubmit(name);
    setName('');
  };
  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={formSubmit}>
        <SearchFormButtonStyled type="submit">
          <BiSearch size="35px" color="#3F00B5" />
        </SearchFormButtonStyled>
        <SearchFormInputStyled
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
          value={name}
        />
      </SearchFormStyled>
    </SearchbarStyled>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
