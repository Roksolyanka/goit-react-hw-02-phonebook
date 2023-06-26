import React from 'react';
import { FilterStyled } from './FilterStyled.styled';
import { InputFind } from './InputFind.styled';

export const Filter = ({ value, onChange }) => (
  <FilterStyled>
    Find contacts by name:
    <InputFind type="text" value={value} onChange={onChange} />
  </FilterStyled>
);
