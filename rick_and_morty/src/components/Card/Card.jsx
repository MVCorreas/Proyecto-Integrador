import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

//                                  aqui me traigo las propiedades del mapDispatchToProps como props al componente

const Card = ({ character, onClose, addFav, removeFav, myFavorites }) => {
  const { id, name, status, species, gender, origin, image } = character;
  const [isFav, setIsFav] = useState(false);

//   useEffect(() => {
//     myFavorites.forEach((fav) => {
//        if (fav.id === id) {
//           setIsFav(true);
//        }
//     });
//  }, [myFavorites]);

useEffect(() => {
  for (let i = 0; i < myFavorites.length; i++) {
    if (myFavorites[i].id === id) {
      setIsFav(true);
      break; 
    }
  }
}, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  return (
    <div id={id}>
      <hr />
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h3 className="card-name">{name}</h3>
      </Link>
      <button onClick={handleFavorite}>
        {isFav ? '❤️' : '🤍'} 
      </button>
      {/* <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{origin.name}</p> */}
      <img src={image} alt={name} />
      <hr />
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