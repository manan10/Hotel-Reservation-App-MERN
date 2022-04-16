import React from "react";
import { Form, Input, Button } from "antd";

import CustomForm from "../../../components/CustomForm/CustomForm";
import Header from "../../../components/Auth/Header/Header";
import SwitchLink from "../../../components/Auth/SwitchLink/SwitchLink";

import Rules from "../../../utils/validation-rules";
import classes from "./Login.module.css";

const Login = ({ onLogIn, updateLoginMode }) => {
  return (
    <React.Fragment>
      <SwitchLink
        preText="New User?"
        switchText="Sign-Up"
        updateMode={updateLoginMode}
      />
      <Header heading="Sign-In" />

      <CustomForm onFinish={(values) => onLogIn(values)}>
        <Form.Item
          className={classes.Form}
          label="Email"
          name="email"
          rules={Rules.emailRules}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={Rules.passwordRules}
          className={classes.Form}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className={classes.Form}
          wrapperCol={{ offset: 0, span: 16 }}
          style={{ marginTop: "20px" }}
        >
          <Button
            style={{ backgroundColor: "#3a405a", color: "white" }}
            htmlType="submit"
          >
            {" "}
            Submit
          </Button>
        </Form.Item>
      </CustomForm>
    </React.Fragment>
  );
};

export default Login;
