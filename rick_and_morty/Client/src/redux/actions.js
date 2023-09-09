import axios from 'axios';


//Creamos las action types
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//creamos las actions
// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character
//   }
// };

//ADD FAV CON PROMESAS
// export const addFav = async (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

//ADD FAV CON ASYNC AWAIT
export const addFav = (character) => async (dispatch) => {
    try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const { data } = await axios.post(endpoint, character);
  
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert('Could not add the character selected');
      console.error(error);
    }
  };
  
 
// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// };

//REMOVE FAV CON PROMESAS
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };

//REMOVE FAV ASYNC AWAIT
export const removeFav = (id) => async (dispatch) => {
    
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        const { data } = await axios.delete(endpoint);
        dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
    } catch (error) {
        alert('Could not remove the character selected')
        console.error(error);
      }
 };
 
export const getCharacterDetail = (id)=> { //Hacemos peticion asíncrona, retornamos una fx
    return function (dispatch) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then(data=>dispatch({type:GET_CHARACTER_DETAIL, payload:data}))
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};
 

