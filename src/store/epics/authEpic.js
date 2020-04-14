import { Observable } from "rxjs/Rx";
import { HttpService } from "../../services/http";
import PATH from "./../../config/path";
// import clientConfig from "./../../config/clientConfig"; will setup

import { authAction } from "../action/index";

import { SIGNUP, LOGIN, LOGOUT, IS_LOGGED_IN } from "../constants";

export default class authEpic {
  static signup = (action$) => {
    return;
  };
  static login = (action$) => {
    return;
  };
  static logout = (action$) => {
    return;
  };
  static isLoggedIn = (action$) => {
    return;
  };
}
