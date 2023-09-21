import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import React from "react";
import { filterCards, orderCards } from "../../redux/actions";
//import { useState } from "react";
import { useSelector } from "react-redux";
import styles from './StyledFav.module.css';

const Favorites = () => {

  const dispatch = useDispatch();

  //const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    //setAux(!aux);
  };

  
  const handleFilter = (event) => {
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
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={styles.FavoriteContainer}>
    <h1 className={styles.neonText}>My Favorites</h1>
    <div >
      <select onChange={handleOrder} name="order" className={styles.SelectContainer}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="gender" className={styles.SelectContainer}>
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
  );
  };

// const mapStateToProps = (state) => {
//     return {
//       myFavorites: state.myFavorites
//     }
//   };


export default Favorites;