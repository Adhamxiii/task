import React from "react";
import styled from "styled-components";
import Links from "./Links";
import NavCTA from "./NavCTA";

const Navlink = () => {
  return (
    <StyledNavlink>
      <Links />
      <NavCTA />
    </StyledNavlink>
  );
};

const StyledNavlink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width:972px) {
    flex-direction: column;
  }
`;
export default Navlink;
