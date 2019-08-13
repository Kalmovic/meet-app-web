import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    color: #fff;
    font-size: 30px;
  }

  #dashButton {
    margin: 5px 0 0;
    height: 40px;
    width: 140px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;

export const List = styled.div`
  margin-top: 40px;
  list-style: none;
`;

export const Meet = styled.button`
  border: none;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  padding: 10px 20px;
  border-radius: 4px;
  background: #2b1c31;
  justify-content: space-between;

  strong {
    color: #fff;
  }

  span {
    color: #eee;
  }
`;
