import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 70px;
  background: #1a1823;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      width: 25px;
    }
  }
  aside {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid #3b2740;

    strong {
      display: block;
      font-size: 14px;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
    }
  }
  button {
    margin: 5px 0 0;
    height: 40px;
    width: 80px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 12px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;
