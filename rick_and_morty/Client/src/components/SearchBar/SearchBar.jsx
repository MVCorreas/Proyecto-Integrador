//import React from "react";
import { useState } from "react";
import styles from "./StyledSearch.module.css";


export default function SearchBar({onSearch, onRandom}) {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
   
   return (
    <div>
    <div className={styles.StyledSearch}> 
      <nav className={styles.StyledNav}>
        <input
          type='search'
          placeholder='Add an ID'
          onChange={handleChange}
        />
        
          <button className={styles.NavButton} onClick={() => onSearch(id)}>Find Character</button>
       
          <button className={styles.NavButton} onClick={onRandom}>Random</button>
        
      </nav>
    </div>
  </div>
    );
  };