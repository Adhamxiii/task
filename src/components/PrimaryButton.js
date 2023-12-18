import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ children }) => {
  return <MainButton>{children}</MainButton>;
};

const MainButton = styled.button`
  display: flex;
  height: 67px;
  padding: 20px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: var(--secondaryColor);
  color: #fffffe;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export default PrimaryButton;
