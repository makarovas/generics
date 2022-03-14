import React from "react";
import { useDebounce } from "../hooks/useDebounce";
interface ISearchFilter {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchFilter = (props: ISearchFilter) => {
  const { setSearchQuery } = props;
  const [query, setQuery] = React.useState<string>("");

  const debounceQuery = useDebounce(query, 300);

  React.useEffect(() => {
    if (debounceQuery !== "") {
      setSearchQuery(debounceQuery);
    }
  }, [debounceQuery, setSearchQuery]);

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
        onChange={(event) => setQuery(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchFilter;
