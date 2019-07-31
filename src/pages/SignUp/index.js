import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password needs to have more than 6 chars')
    .required('Password is required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="meetup" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="What's your full name?" />
        <Input name="email" type="email" placeholder="Your awesome email" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">Create awesome account!</button>
        <Link to="/">I am registred!</Link>
      </Form>
    </>
  );
}
