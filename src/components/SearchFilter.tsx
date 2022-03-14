import React from "react";
interface ISearchFilter {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchFilter = (props: ISearchFilter) => {
  const { setSearchQuery } = props;
  return (
    <div>
      <label htmlFor="search" className="mt-3">
        Search
      </label>
      <input
        id="search"
        className="form-control full-width"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchFilter;
