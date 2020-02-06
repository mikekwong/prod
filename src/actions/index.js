import { FETCH_POSTS } from "../constants";
import jsonPlaceholder from "../api/jsonPlaceholder";

// async action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: FETCH_POSTS, payload: response });
};
