import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: rgb(58, 177, 155);
  background: linear-gradient(
    27deg,
    rgba(58, 177, 155, 1) 0%,
    rgba(113, 89, 193, 1) 35%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  button {
    height: 44px;
    background: rgb(58, 177, 155);
    font-weight: bold;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#3ab19b')};
    }
  }
  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
