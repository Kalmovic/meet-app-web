import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="meetup" />

      <form>
        <input placeholder="What's your full name?" />
        <input type="email" placeholder="Your awesome email" />
        <input type="password" placeholder="Your secret password" />

        <button type="submit">Create awesome account!</button>
        <Link to="/">I am registred!</Link>
      </form>
    </>
  );
}
