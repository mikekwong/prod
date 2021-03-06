import _ from "lodash";
import { FETCH_POSTS, FETCH_USER, FETCH_ERROR } from "../constants";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUsers(id)));

  // chained version of above using Lodash ... add .value() to execute chain of events
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUsers(id)))
    .value();
};

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

// // Memoize the fetches to avoid repeat fetches of same objects
// export const fetchUsers = id => dispatch => {
//   try {
//     _fetchUser(id, dispatch);
//   } catch (error) {
//     dispatch({ type: FETCH_ERROR, payload: error });
//   }
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: FETCH_USER, payload: response.data });
// });
