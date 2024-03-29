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
        paddingTop:"3rem",
      }}
    >
      <input placeholder="Start searching..." className="main-text-bar" style={{width:"60%"}}  type="text" onChange={setSearchStringQuery} />
    </div>
  );
};

export default SearchBar;
