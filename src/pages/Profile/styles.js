import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: auto;
  max-width: 600px;
  margin: 50px auto;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #e1edf2;
      align-self: flex-start;
      margin: 0 15px 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin-bottom: 10px;
    }

    button {
      display: block;
      align-self: flex-end;
      width: 200px;
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;
