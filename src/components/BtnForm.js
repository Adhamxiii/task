import React from "react";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

const BtnForm = () => {
  return (
    <StyledBtnForm>
      <input type="text" placeholder="Enter your email here..." />
      <PrimaryButton>Subscribe</PrimaryButton>
    </StyledBtnForm>
  );
};

const StyledBtnForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  input {
    width: 444px;
    padding: 21px 25px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;


    button {
      width: 100%;
    }

    input {
      width: 100%;
    }
  }

  
`;

export default BtnForm;
