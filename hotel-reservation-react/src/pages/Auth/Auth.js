import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { message } from "antd";
import { connect } from "react-redux";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

import classes from "./Auth.module.css";
import axios from "../../axios";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  state = {
    login: true,
  };

  onSignUp = (signUpInfo) => {
    axios
      .post("/users/register", signUpInfo)
      .then((res) => {
        if (res.data.status === "ok") {
          message.success("Registeration Successful.Login to continue.");
          this.setState({ login: true });
        } else {
          message.error("Registeration Failed. " + res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  onLogIn = (loginInfo) => {
    axios
      .post("/users/login", loginInfo)
      .then((res) => {
        if (res.data.status === "ok") {
          message.success("Login Successful");
          this.props.login(res.data);
          this.props.history.replace("/");
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  updateLoginMode = () => this.setState({ login: !this.state.login });

  render() {
    return (
      <Container fluid>
        <Row style={{ height: "100vh" }}>
          <Container className={classes.FormContainer}>
            {this.state.login ? (
              <Login
                onLogIn={this.onLogIn}
                updateLoginMode={this.updateLoginMode}
              />
            ) : (
              <Signup
                onSignUp={this.onSignUp}
                updateLoginMode={this.updateLoginMode}
              />
            )}
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    login: (data) => dispatch(actions.loginUser(data)),
  };
};

export default connect(null, mapDispatchToState)(withRouter(Auth));
