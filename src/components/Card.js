import React from "react";
import styled from "styled-components";

const Card = ({ img, title, isChoosed }) => {
  return (
<CardStyled isChoosed={isChoosed}>
      <div className="container">
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 8px;
  box-shadow: 4px 6px 13px 0px rgba(215, 215, 215, 0.25);
  background: ${(props) => (props.isChoosed ? "#6246EA" : "##fffffe")};
  color: ${(props) => (props.isChoosed ? "#FFFFFE" : "##2B2C34")};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    p {
      color: var(--primaryColor);
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Card;
