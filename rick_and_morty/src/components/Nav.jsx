import React from 'react';
import SearchBar from './SearchBar';

export const Nav = ({ onSearch }) => {
  return (
    <div>
      Nav
      <SearchBar onSearch={onSearch} />
    </div>
  );
};