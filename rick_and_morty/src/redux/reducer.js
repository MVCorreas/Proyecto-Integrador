
import { ADD_FAV, CLEAN_DETAIL, GET_CHARACTER_DETAIL, REMOVE_FAV } from './actions';

const initialState = {
    myFavorites: [],
    characterDetail: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        return {...state, myFavorites: [...state.myFavorites, action.payload]};
      case REMOVE_FAV:
        return {...state, myFavorites: state.myFavorites.filter((character) => character.id !== +action.payload)} //o parseInt(action.payload) o Number(action.payload)
      case GET_CHARACTER_DETAIL:
        return {...state,characterDetail: action.payload};
      case CLEAN_DETAIL:
        return {...state, characterDetail: {}};
      default:
        return state;
    }
};