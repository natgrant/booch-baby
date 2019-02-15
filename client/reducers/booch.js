import boochData from "../../data/booch";

const initialState = boochData.kombucha;

// console.log(boochData);
const booch = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default booch;
