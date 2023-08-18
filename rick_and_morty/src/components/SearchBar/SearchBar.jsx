//import React from "react";
import { useState } from "react";

export default function SearchBar({onSearch}) {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
   
   return (
      <div>
        <input type='search' placeholder="Add an ID" onChange={handleChange}/>
        <button onClick={() => {onSearch(id)}}>Find Character</button>
      </div>
    );
  };