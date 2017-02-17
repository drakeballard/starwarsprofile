import { SET_CHARACTERS } from './actions';

const initalState = [];

export default (state = initalState, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
}
