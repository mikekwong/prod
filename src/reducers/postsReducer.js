import { FETCH_POSTS, FETCH_ERROR } from "../constants";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_ERROR:
      return action.payload.error;
    default:
      return state;
  }
};

export default postsReducer;
