//Action Types
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const GET_POSTS = "GET_POSTS";
const GET_USERS = "GET_USERS";

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
export const getUsers = (item) => ({
  type: GET_USERS,
  payload: item,
});
export const signUp = (item) => ({
  type: SIGN_UP,
  payload: item,
});

//state
export const initial_state = {
  data: [],
  user: { name: "", email: "" },
  users: [],
  isLoggedIn: false,
};

//Utitlity functions
const isUserSignedUp = (item) => {};
const addNewUser = (item, users) => {
  const newUser = {
    id: users.length + 1,
    ...item,
  };
  return [...users, newUser];
};

//Reducer
const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_POST:
    case DELETE_POST:
    case UPDATE_POST:
    case SIGN_IN:
      return { ...state, user: action.payload };
    case GET_POSTS:
      return { ...state, data: [...action.payload] };
    case GET_USERS:
      return { ...state, users: [...action.payload] };
    case SIGN_UP:
      return (state.users = addNewUser(action.payload, state.users));
    default:
      return state;
  }
};

export default reducer;
