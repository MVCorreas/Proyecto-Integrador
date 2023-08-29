import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import React from "react";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import styles from './StyledFav.module.css';

const Favorites = ({ myFavorites }) => {

  const [aux, setAux] = useState(false)
  //const [filteredFavorites, setFilteredFavorites] = useState([]);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  
  const handleFilter = (e) => {
    // const selectedValue = e.target.value;
    // let payload = e.target.value; // Default payload value
    // if (selectedValue === "Male") {
    //   payload = "Male";
    // } else if (selectedValue === "Female") {
    //   payload = "Female";
    // } else if (selectedValue === "Genderless") {
    //   payload = "Genderless";
    // } else if (selectedValue === "unknown") {
    //   payload = "unknown";
    // }
    dispatch(filterCards(e.target.value));
  };

    return (
      
      <body className={styles.FavoriteContainer}>
        <h1 className={styles.neonText}>My Favorites</h1>
        <div className={styles.overlay}>
          <div className={styles.SelectContainer}>
          <select className={styles.StyledSelect} onChange={handleOrder}name="order">
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select className={styles.StyledSelect} onChange={handleFilter} name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="All Favorites">All Favorites</option>
          </select>
          </div>
          <div className={styles.FavCards}>
          {myFavorites.map((character) => (
            <Card key={character.id} id={character.id} character={character} />
          ))}
          </div>
        </div>
      </body>
    );
  };

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    }
  };


export default connect(mapStateToProps)(Favorites);