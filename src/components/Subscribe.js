import React from "react";
import BtnForm from "./BtnForm";
import mail from "../assets/images/mail.png";
import styled from "styled-components";

const Subscribe = () => {
  return (
    <SubscribeStyle>
      <div className="subscribe">
        <div>
          <img src={mail} alt="mail box" />
        </div>
        <div className="text">
          <h3>Subscribe For the lastest updates</h3>
          <p>Subscribe to newsletter and never miss the new post every week.</p>
        </div>
        <BtnForm />
      </div>
    </SubscribeStyle>
  );
};

const SubscribeStyle = styled.div`
  display: flex;
  padding: 58px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .subscribe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
      color: #2b2c34;
      font-size: 36px;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }

    p {
      color: #c0c0c0;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .subscribe {
      width: 100%;
    }


  }
`;

export default Subscribe;
