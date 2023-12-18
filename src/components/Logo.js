import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <h1>
        Dasteen<span>.Blog</span>
      </h1>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: var(--primaryColor);
    span {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--secondaryColor);
    }
  }
`;

export default Logo;
