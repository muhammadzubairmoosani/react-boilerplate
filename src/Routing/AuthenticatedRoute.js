import React from "react";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends React.Component {
  render() {
    const { component: C, props: cProps, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          cProps.isAuthenticated
            ? <C {...props} {...cProps} />
            : <Redirect
              to={`/login`}
            />}
      />
    )
  }
}

export default AuthenticatedRoute;