import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

import adminService from "../services/adminService";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello Login</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    langue: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
