import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import styles from '../Card/StyledCard.module.css';

//                                  aqui me traigo las propiedades del mapDispatchToProps como props al componente

const Card = ({ character, onClose, addFav, removeFav, myFavorites }) => {
  const { id, name, status, species, gender, origin, image } = character;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);

// useEffect(() => {
//   for (let i = 0; i < myFavorites.length; i++) {
//     if (myFavorites[i].id === id) {
//       setIsFav(true);
//       break; 
//     }
//   }
// }, [myFavorites, id]);

const handleFavorite = () => {
  isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image });
  setIsFav(!isFav);
};

  return (
    <div className={styles.CardCont}>
    <div className={styles.CardContainer}>
      <div className={styles.ButtonCont}>
        {isFav ? (
          <button className={styles.Button} onClick={handleFavorite}>
            ⭐️
          </button>
        ) : (
          <button className={styles.Button} onClick={handleFavorite}>
            ☆
          </button>
        )}
         {useLocation().pathname === "/home" && (
        <button className={`${styles.Button} ${styles.close}`} onClick={() => onClose(id)}>
          ❌
        </button>
         )}
      </div>
      <Link to={`/detail/${id}`}>
        <h2 className={`${styles.HomeTitle} ${useLocation().pathname === "/home" ? styles.HomeTitle : styles.FavoritesTitle}`}>{name}</h2>
      </Link>
      <img className={styles.Image} src={image} alt={`No se encuentra la imagen de ${name}`} />
      <h4 className={styles.Label}>| {status} |</h4>
      <h4 className={styles.Label}>| {species} |</h4>
    </div>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);