import { useState } from "react";
const SearchBar = () => {

    const [query,setStringQuery] =useState("");

    const setSearchStringQuery =(event)=>{
        setStringQuery(event.target.value)
    }

    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <input type="text" onChange={setSearchStringQuery} /><button>search</button>
        </div>
    )

}

export default SearchBar;