import React from "react";
import { Input, Form, Button } from "antd";

import CustomForm from "../../../components/CustomForm/CustomForm";
import Header from "../../../components/Auth/Header/Header";
import SwitchLink from "../../../components/Auth/SwitchLink/SwitchLink";

import Rules from "../../../utils/validation-rules";
import classes from "../Login/Login.module.css";

const Signup = ({ onSignUp, updateLoginMode }) => {
  return (
    <React.Fragment>
      <SwitchLink
        preText="Already a User?"
        switchText="Sign-In"
        updateMode={updateLoginMode}
      />
      <Header heading="Create Account" />

      <CustomForm onFinish={(values) => onSignUp(values)}>
        <Form.Item
          className={classes.Form}
          label="Name"
          name="name"
          rules={Rules.lnameRules}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={classes.Form}
          label="Email"
          name="email"
          rules={Rules.emailRules}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={classes.Form}
          label="Password"
          name="pwd"
          rules={Rules.passwordRules}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confPwd"
          className={classes.Form}
          rules={Rules.passwordRules}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
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

export default Signup;
