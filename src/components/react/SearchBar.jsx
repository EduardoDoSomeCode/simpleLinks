import { useState } from "react";
import { addSearchQueryString } from "../../nodeStore";
import "../css/buttons.css";
import "../css/input.css";
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
      <input className="main-text-bar"  type="text" onChange={setSearchStringQuery} />
      <button className="search-btn">search</button>
    </div>
  );
};

export default SearchBar;
