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
      <nav>
        <input
          type='search'
          placeholder='Add an ID'
          onChange={handleChange}
        />
        <div className={styles.NavButton}> 
          <button onClick={() => onSearch(id)}>Find Character</button>
        </div>
        <div className={styles.NavButton}> 
          <button onClick={onRandom}>Random</button>
        </div>
      </nav>
    </div>
  </div>
    );
  };