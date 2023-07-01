import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';

import { useLocalStorage } from 'hooks';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
<<<<<<< HEAD
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value);
=======
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoSlice';

export const SearchForm = () => {
  const [value, setValue] = useLocalStorage('search', '');

  const dispatch = useDispatch();

  const handleInput = e => {
    const { value } = e.currentTarget;

    setValue(value);
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      query,
    };
    onSubmit(todo);

<<<<<<< HEAD
    setQuery('');
=======
    const todo = {
      id: nanoid(),
      text: value,
    };

    dispatch(addTodo(todo));
    setValue('');
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
<<<<<<< HEAD
        value={query}
=======
        value={value}
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
        autoFocus
      />
    </SearchFormStyled>
  );
};
