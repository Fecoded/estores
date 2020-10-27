import styled, { css } from 'styled-components';

const normalBtn = css`
  background-color: #141c2c;
  border: 2px solid #141c2c;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

const googleBtn = css`
  background: transparent;
  border: 2px solid #ecf2ff;

  &:hover {
    opacity: 0.7;
  }

  a {
    color: #141c2c;
  }

  img {
    margin-right: 5px;
    width: 20px;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleBtn;
  }

  return normalBtn;
};

export const CustomButton = styled.button`
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  margin: 20px 0;
  width: 100%;

  a {
    text-decoration: none;
  }

  ${getButtonStyles}
`;
