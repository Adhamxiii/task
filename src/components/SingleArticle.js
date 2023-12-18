import React from "react";
import User from "./User";
import styled from "styled-components";

const SingleArticle = ({ img, title }) => {
  return (
    <CardStyled>
      <div className="container">
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <User />
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  width: 300px;
  height: 480px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: #fffffe;
  box-shadow: 4px 6px 13px 0px rgba(215, 215, 215, 0.25);

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;

    img {
      width: 100%;
      height: 200px;
      border-radius: 13px;
    }

    p {
      color: #2b2c34;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export default SingleArticle;
