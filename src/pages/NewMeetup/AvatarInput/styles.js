import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  background: #1a1823;
  height: 270px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 600px;
    margin: 50px auto;

    &:hover {
      opacity: 0.7;
    }

    img {
      background: #333;
      max-height: 270px;
    }

    span {
      margin-top: 10px;
      font-size: 18px;
    }

    input {
      display: none;
    }
  }
`;
