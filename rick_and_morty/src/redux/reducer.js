
import { ADD_FAV, GET_CHARACTER_DETAIL, REMOVE_FAV } from './actions';

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
        return {...state,characterDetail: action.payload}
      default:
        return state;
    }
};