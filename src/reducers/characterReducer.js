import { SET_CHARACTER, SET_CHARACTER_LOADING, SET_CHARACTER_ERROR } from '../Actions/characterActions';

const initialState = {
  image: '',
  character: '',
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CHARACTER:
      return { ...state, ...action.payload };
    case SET_CHARACTER_LOADING:
      return { ...state, loading: true };
    case SET_CHARACTER_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
