import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { CardContainer, Button, ButtonCont, Image, Label, Title, CardCont } from '../Card/StyledCard';

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
    <div>
      <CardCont>
    <CardContainer>
    <ButtonCont> 
       {
          isFav ? ( <Button onClick={handleFavorite}> ⭐️ </Button>) 
          : ( <Button onClick={handleFavorite}> ☆ </Button>) 
       }

    <Button close onClick={() => onClose(id)}>❌</Button>
    </ButtonCont>
   <Link to={`/detail/${id}`}> <Title> {name}</Title> </Link>  
    <Image src={image} alt = {`No se encuentra la imagen de ${name}`}/>
     
    <Label>| {status} |</Label>
    <Label>| {species} |</Label>
   
  
 </CardContainer>
 </CardCont>
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