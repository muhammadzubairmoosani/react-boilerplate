import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes";
import { authAction } from "./../store/action";

class AppRoutes extends Component {
  state = {
    loading: false,
    isAuthenticated: true,
  };

  /////// will setup ////////
  // componentWillMount() {
  //   this.props.isLoggedInAction();
  // }

  render() {
    const { loading, isAuthenticated } = this.state;
    if (loading) return <h2>Loading...</h2>;
    return <Routes childProps={{ isAuthenticated }} />;
  }
}

/////// will setup ////////
const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedInAction: () => dispatch(authAction.isLoggedIn()),
  };
};

export default connect(null, mapDispatchToProps)(AppRoutes);
