import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_LOGGED_IN,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAILURE,
} from "../constants";

export default class authAction {
  ////////////////////////  SIGNUP  ////////////////////
  static signup(payload) {
    return {
      type: SIGNUP,
      payload,
    };
  }
  static signupSuccess(payload) {
    return {
      type: SIGNUP_SUCCESS,
      payload,
    };
  }
  static signupFailure(error) {
    return {
      type: SIGNUP_FAILURE,
      error,
    };
  }

  ////////////////////////  LOGIN  ////////////////////
  static login(payload) {
    return {
      type: LOGIN,
      payload,
    };
  }

  static loginSuccess(payload) {
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  }

  static loginFailure(error) {
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }

  ////////////////////////  LOGOUT  ////////////////////
  static logout(payload) {
    return {
      type: LOGOUT,
      payload,
    };
  }
  static logoutSuccess(payload) {
    return {
      type: LOGOUT_SUCCESS,
      payload,
    };
  }
  static logoutFailure(error) {
    return {
      type: LOGOUT_FAILURE,
      error,
    };
  }

  ////////////////////////  IS_LOGGED_IN  ////////////////////
  static isLoggedIn(payload) {
    return {
      type: IS_LOGGED_IN,
      payload,
    };
  }
  static isLoggedInSuccess(payload) {
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload,
    };
  }
  static isLoggedInFailure(error) {
    return {
      type: IS_LOGGED_IN_FAILURE,
      error,
    };
  }
}
