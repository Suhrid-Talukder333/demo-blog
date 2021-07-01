//Action Types
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const GET_POSTS = "GET_POSTS";
const GET_USERS = "GET_USERS";
const SIGN_OUT = "SIGN_OUT";
const LIKED = "LIKED";
const DISLIKED = "DISLIKED";

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
export const signOut = () => ({
  type: SIGN_OUT,
});
export const postLiked = (item) => ({
  type: LIKED,
  payload: item,
});
export const postDisliked = (item) => ({
  type: DISLIKED,
  payload: item,
});

//state
let initial_state;
if (localStorage.getItem("state")) {
  initial_state = JSON.parse(localStorage.getItem("state"));
} else {
  initial_state = {
    data: [],
    user: { name: "", email: "" },
    users: [],
    isLoggedIn: false,
    liked: {},
    disliked: {},
  };
}

//Utitlity functions
const init_state = () => {
  if (localStorage.getItem("state")) {
    return JSON.parse(localStorage.getItem("state"));
  } else {
    return initial_state;
  }
};
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
      state = init_state();
      state.data.push(action.payload);
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case DELETE_POST:
      state = init_state();
      state = action.payload;
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case UPDATE_POST:
      state = init_state();
      state = action.payload;
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case SIGN_IN:
      state = init_state();
      state = { ...state, user: { ...action.payload }, isLoggedIn: true };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case GET_POSTS:
      state = init_state();
      state = { ...state, data: [...action.payload] };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case GET_USERS:
      state = init_state();
      state = { ...state, users: [...action.payload] };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case SIGN_UP:
      state = init_state();
      const { email } = action.payload;
      const newUsers = addNewUser(action.payload, state.users);
      const newLiked = { ...state.liked, [email]: [] };
      const newDisliked = { ...state.disliked, [email]: [] };
      console.log(newUsers, "newUsers");
      state = {
        ...state,
        users: newUsers,
        liked: newLiked,
        disliked: newDisliked,
      };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case SIGN_OUT:
      state = init_state();
      state = {
        ...state,
        user: { name: "", email: "" },
        isLoggedIn: false,
      };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case LIKED:
      state = init_state();
      state = {
        ...state,
        liked: { ...action.payload },
      };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case DISLIKED:
      state = init_state();
      state = {
        ...state,
        disliked: { ...action.payload },
      };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
