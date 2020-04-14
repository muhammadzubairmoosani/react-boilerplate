import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import HomePage from "./../view/HomePage";
import RegistrationPage from "./../view/RegistrationPage";
import LoginPage from "./../view/LoginPage";

export default ({ childProps }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} props={childProps} />
      <Route exact path="/login" component={LoginPage} props={childProps} />
      <Route
        exact
        path="/register"
        component={RegistrationPage}
        props={childProps}
      />
      <AuthenticatedRoute
        exact
        path="/admin"
        component={"Admin"}
        props={childProps}
      />
    </Switch>
  );
};
