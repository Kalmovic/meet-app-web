import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(135deg, #fdd819 10%, #e80505 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    height: 120px;
    width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 22px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 22px;
      font-size: 16px;
      transition: background 0.6s;

      &:hover {
        background: ${darken(0.03, '#ABDCFF')};
      }
    }

    a {
      font-weight: 600;
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;