import { SET_CHARACTER } from '../Actions/characterActions';

const initialState = {
  photoUrl: '',
  name: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CHARACTER:
      return action.payload;
    default:
      return state;
  }
}
