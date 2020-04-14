import {
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  IS_LOGGED_IN,
  IS_LOGGED_IN_FAILURE,
  IS_LOGGED_IN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../constants";

const initialState = {
  user: null,

  signup: null,
  signupLoader: false,
  signupError: null,

  login: null,
  loginLoader: false,
  loginError: null,

  isLoggedIn: false,
  isLoggedInLoader: false,
  isLoggedInError: false, //false or null ?
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// SIGNUP /////////////////////
    case SIGNUP:
      return {
        ...state,
        signup: null,
        signupLoader: true,
        signupError: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: action.payload,
        signupLoader: false,
        signupError: null,

        verifyPin: null,
        verifyPinLoader: false,
        verifyPinError: null,

        getPin: null,
        getPinLoader: false,
        getPinError: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: null,
        signupLoader: false,
        signupError: action.error,
      };

    ////////////////////////// LOGIN /////////////////////
    case LOGIN:
      return {
        ...state,
        login: null,
        loginLoader: true,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        loginLoader: false,
        loginError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: null,
        loginLoader: false,
        loginError: action.error,
      };

    ////////////////////////// SIGNOUT /////////////////////
    case LOGOUT_SUCCESS:
      state = initialState;
      return state;

    ////////////////////////// IS_LOGGED_IN /////////////////////
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: null,
        isLoggedInLoader: true,
        isLoggedInError: null,
      };
    case IS_LOGGED_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoggedInLoader: false,
        isLoggedInError: null,
      };
    case IS_LOGGED_IN_FAILURE:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isLoggedInLoader: false,
        isLoggedInError: action.error,
      };
    default:
      return state;
  }
}
