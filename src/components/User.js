import React from "react";
import user from "../assets/images/Ellipse 80.png";
import styled from "styled-components";

const User = () => {
  return (
    <UserStyled>
      <img src={user} alt="User" />
      <div className="info">
        <p className="name">Dasteen</p>
        <p className="date">Jan 10, 2022 ∙ 3 min read</p>
      </div>
    </UserStyled>
  );
};

const UserStyled = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.2px;

    .name {
      color: #2b2c34;
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }

    .date {
      color: #2b2c34;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }
  }
`;

export default User;
