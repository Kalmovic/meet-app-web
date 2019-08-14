import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: auto;
  min-height: 100%;
  max-width: 910px;
  margin: 50px auto;
  text-align: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 40px;
  }
  nav {
    display: flex;
    align-items: center;
    align-self: flex-end;

    #edit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      margin: 5px 10px 0;
      height: 44px;
      color: #fff;
      font-weight: bold;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }

      div {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    }

    #delete {
      width: 150px;
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }

      div {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const Body = styled.div`
  margin-top: 20px;

  img {
    display: flex;
    align-items: center;
    margin: 50px auto;
    margin-bottom: 30px;
    background: #1a1823;
    height: 270px;
  }
  span {
    color: #fff;
    background: transparent;
    border: 0;
    margin-top: 30px;
    justify-content: center;
    text-align: left;
    margin: 0 0 10px;
    resize: none;
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: left;

  #date {
    color: #999;
    font-weight: 400;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 3px;
      }
    }
  }

  #location {
    margin-left: 20px;
    color: #999;
    font-weight: 400;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 3px;
      }
    }
  }
`;
