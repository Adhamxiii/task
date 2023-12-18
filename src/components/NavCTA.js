import React from "react";
import coffee from "../assets/images/simple-icons_buymeacoffee.svg";
import styled from "styled-components";

const NavCTA = () => {
  return (
    <StyledNavCTA>
      <img src={coffee} alt="buy me a coffee" />
      <span>Buy me a coffee</span>
    </StyledNavCTA>
  );
};

const StyledNavCTA = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0.625rem;
  gap: 10px;
  border-radius: 4px;
  background: var(--secondaryColor);
  color: #fffffe;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  border: none;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default NavCTA;
