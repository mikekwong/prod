import { FETCH_USER, FETCH_ERROR } from "../constants";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];
    case FETCH_ERROR:
      return action.payload.error;
    default:
      return state;
  }
};

export default usersReducer;
