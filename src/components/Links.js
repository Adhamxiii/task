import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import { links } from "../data";

const Links = () => {
  return (
    <StyledNavLinks>
      <ul>
        {links.map(({ id, text, path }) => {
          return (
            <li key={id}>
              {text === "search" ? (
                <a href={path}>
                  <FaMagnifyingGlass />
                </a>
              ) : null}
              <a href={path}>{text}</a>
            </li>
          );
        })}
      </ul>
    </StyledNavLinks>
  );
};

const StyledNavLinks = styled(Links)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  gap: 3rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default Links;
