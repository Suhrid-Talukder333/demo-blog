//Action Types
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";
const SIGN_IN = "SIGN_IN";
const GET_POSTS = "GET_POSTS";
//Actions
export const createPost = (item) => ({
  type: CREATE_POST,
  payload: item,
});
export const deletePost = (item) => ({
  type: DELETE_POST,
  payload: item,
});
export const updatePost = (item) => ({
  type: UPDATE_POST,
  payload: item,
});
export const signIn = (item) => ({
  type: SIGN_IN,
  payload: item,
});
export const getPosts = (item) => ({
  type: GET_POSTS,
  payload: item,
});
//state
export const initial_state = { data: [], user: { name: "", email: "" } };

//Reducer
const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_POST:
    case DELETE_POST:
    case UPDATE_POST:
    case SIGN_IN:
    case GET_POSTS:
      return (state.data = action.payload);
    default:
      return state;
  }
};

export default reducer;
