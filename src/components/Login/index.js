import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';

const SignUp = () => (
  <Form>
    <Header as='h1'>Login</Header>
    <Form.Field>
      <label>Email Address</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default SignUp;
