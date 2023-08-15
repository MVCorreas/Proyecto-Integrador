import React from 'react'

//Creamos las action types
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//creamos las actions
export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character
  }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
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
 
