import React from 'react';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react';

const Login = () => (
  <Form>
    <Header as='h1'>Create Account</Header>
    <Form.Field>
      <label>First Name</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default Login;
