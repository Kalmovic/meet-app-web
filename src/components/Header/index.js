import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Joseph Torres</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <button type="submit">Log out</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
