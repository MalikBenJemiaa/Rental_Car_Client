import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    navigate(`/search/${searchValue}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="searchInputWrapper">
        <input
          className="searchInput uppercase"
          type="text"
          placeholder="Trouvez une voiture "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" className="absolute bi bi-search right-5 top-2" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
