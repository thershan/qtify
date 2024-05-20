import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search a song of your choice" />
      <button type="submit">🔍</button>
    </div>
  );
}

export default Searchbar;
