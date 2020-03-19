import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green gr-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
