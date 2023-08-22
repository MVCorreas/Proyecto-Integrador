//import React from "react";
import { useState } from "react";
import {StyledSearch, NavButton} from "./StyledSearch"
import {randomCharacter} from '../../App';

export default function SearchBar({onSearch, onRandom}) {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
   
   return (
      <div>
        <StyledSearch>
          <nav>
        <input type='search' placeholder="Add an ID" onChange={handleChange}/>
        <NavButton onClick={() => {onSearch(id)}}>Find Character</NavButton>
        <NavButton><button onClick={onRandom}>Random</button></NavButton>
        </nav>
        </StyledSearch>
      </div>
     
    );
  };