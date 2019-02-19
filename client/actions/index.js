import request from 'superagent'

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const NAVIGATE = "NAVIGATE";
export const ADD_BOOCH = "ADD_BOOCH"

export const addToCart = id => {
  return {
    type: "ADD_TO_CART",
    id
  };
};

export const deleteFromCart = id => {
  return {
    type: "DELETE_FROM_CART",
    id
  };
};

export const updateCart = cart => {
  return {
    type: UPDATE_CART,
    cart
  };
};

export const navigate = destination => {
  return {
    type: "NAVIGATE",
    destination
  };
};

export const addBooch = booch => {
  return {
    type: ADD_BOOCH,
    booch
  }
}

export function fetchBooch() {
  return (dispatch) => {
    return request
      .get('/api/v1/booch')
      .then(booch => {
        dispatch(addBooch(JSON.parse(booch.text)))
      })
  }
}
