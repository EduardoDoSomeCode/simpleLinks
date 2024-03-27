import { useState } from "react";
import { addSearchQueryString } from "../../nodeStore";

const SearchBar = () => {
  const [query, setStringQuery] = useState("");

  const setSearchStringQuery = (event) => {
    let stringQuery = event.target.value;
    setStringQuery(stringQuery);
    addSearchQueryString(stringQuery);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input type="text" onChange={setSearchStringQuery} />
      <button>search</button>
    </div>
  );
};

export default SearchBar;
