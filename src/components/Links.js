import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import { links } from "../data";

const Links = () => {
  return (
    <StyledNavLinks>
      <div>
        <ul>
          {links.map(({ id, text, path }) => (
            <li key={id}>
              {text === "search" ? (
                <a href={path}>
                  <FaMagnifyingGlass /> {text}
                </a>
              ) : (
                <a href={path}>{text}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </StyledNavLinks>
  );
};

const StyledNavLinks = styled.div`
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

  li, a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 20px;
    color: #2b2c34;
    cursor: pointer;
    font-weight: 700;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    display: none;
  }
    
  
`;

export default Links;
