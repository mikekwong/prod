import { FETCH_POSTS, FETCH_USER, FETCH_ERROR } from "../constants";
import jsonPlaceholder from "../api/jsonPlaceholder";

// async action creator
export const fetchPosts = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

export const fetchUsers = id => async dispatch => {
  try {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};
