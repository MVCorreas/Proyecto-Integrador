
import { ADD_FAV, CLEAN_DETAIL, FILTER, GET_CHARACTER_DETAIL, ORDER, REMOVE_FAV } from './actions';

const initialState = {
    myFavorites: [],
    characterDetail: {},
    allCharacters: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        return {...state, myFavorites: [...state.allCharacters, action.payload]};
      case REMOVE_FAV:
        return {...state, myFavorites: state.myFavorites.filter((character) => character.id !== +action.payload)} //o parseInt(action.payload) o Number(action.payload)
      case GET_CHARACTER_DETAIL:
        return {...state,characterDetail: action.payload};
      case CLEAN_DETAIL:
        return {...state, characterDetail: {}};
      case FILTER:
        let {allCharacters} = state;
        const filteredCharacters = state.allCharacters.filter((character) => character.gender === action.payload);
        return {...state, myFavorites: filteredCharacters};
      case ORDER:
        const sortedCharacters = state.myFavorites.slice().sort((a, b) => { //slice guarda los cambios del sort en un arreglo, sino solamente se cambiar y organizan pero no se deuelven los cambios 
          if (action.payload === 'A') {
            return a.id - b.id;
          } else {
            return b.id - a.id;
          }
        });
        return {
          ...state,
          myFavorites: sortedCharacters
        };
      default:
        return state;
    }
};