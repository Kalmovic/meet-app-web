import styled from 'styled-components';
import { darken } from 'polished';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateTimePicker = styled(DatePicker)`
  min-width: 300px !important;
`;

export const Container = styled.div`
  height: auto;
  min-height: 100%;
  max-width: 910px;
  margin: 50px auto;
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
  }
`;

export const Footer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-block-end: 50px;

  button {
    width: 150px;
    display: block;
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
`;
