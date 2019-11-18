import { fetchCharacter } from '../services/avatarApi';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_LOADING = 'SET_CHARACTER_LOADING';
export const SET_CHARACTER_ERROR = 'SET_CHARACTER_ERROR';

export const setQuote = () => dispatch => {
  dispatch({
    type: SET_CHARACTER_LOADING
  });

  return fetchCharacter()
    .then(character => {
      dispatch({
        type: SET_CHARACTER,
        payload: character
      });

      dispatch({
        type: SET_CHARACTER_ERROR
      });
    });
};
