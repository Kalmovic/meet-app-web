import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="meetup" />

      <form>
        <input type="email" placeholder="Your awesome email" />
        <input type="password" placeholder="Your secret password" />

        <button type="submit">Log In!</button>
        <Link to="/register">Create an awesome account!</Link>
      </form>
    </>
  );
}
