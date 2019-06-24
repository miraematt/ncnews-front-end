import React from "react";

const Search = () => {
  return (
    <form>
      <label>
        Search all articles:
        <input type="text" name="searchTerm" />
      </label>

      <button>Search</button>
    </form>
  );
};

export default Search;
