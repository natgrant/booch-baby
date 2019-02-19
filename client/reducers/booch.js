import {ADD_BOOCH} from '../actions'

const initialState = []

const booch = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOCH:
      return action.booch

    default:
      return state;
  }
};

export default booch;
