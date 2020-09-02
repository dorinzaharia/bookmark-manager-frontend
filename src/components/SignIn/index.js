// External imports
import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink} from "react-router-dom";
  // Css
  import "antd/dist/antd.css";
import "./index.css"

const { Title } = Typography;

class SignIn extends Component {

  render() {
    return (
      <div className="element">
        <Title >Sign In</Title>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div style={{paddingTop: 10}}>
        Or <NavLink to="/signup" > register now!</NavLink>
        </div>
      </Form.Item>
    </Form>
    </div>
    );
  }
}

export default SignIn;
