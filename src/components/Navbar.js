import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Navlink />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1.5rem 2rem;
  height: var(--navHeight);

  
`;

export default Navbar;
