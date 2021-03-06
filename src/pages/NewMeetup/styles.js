import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  height: auto;
  padding: 0 30px;
`;

export const Container = styled.div`
  min-height: 100%;
  max-width: 910px;
  margin: 50px auto;
  margin-bottom: 0;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;

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

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 200px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      padding-top: 15px;
      resize: none;

      &::placeholder {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #999;
      align-self: flex-start;
      margin: 0 15px 10px;
      font-weight: bold;
    }

    #addMeetup {
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
      margin-bottom: 50px;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;
