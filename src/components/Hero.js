import React from "react";
import BtnForm from "./BtnForm";
import img from "../assets/images/hero.png";
import bg from "../assets/images/Hero Background.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="content">
          <h1>Hi, i’m Dasteen Front end dev</h1>
          <p>
            <span></span> On this blog I share tips and tricks, frameworks,
            projects, tutorials, etc Make sure you subscribe to get the latest
            updates
          </p>
          <BtnForm />
        </div>
        <div className="image">
          <img src={img} alt="hero" />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${bg});

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;
    width: 70%;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.875rem;

    h1 {
      font-size: 4rem;
      color: #2b2c34;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #9a9494;
      span {
        width: 3px;
        height: 56px;
        background: #2b2c34;
      }
    }

    .btn-form {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      input {
        padding: 0.5rem;
        border-radius: 0.25rem;
      }
    }

    .image {
      display: flex;
      width: 470px;
      height: auto;
      padding: 12.874px 18.074px 10.757px 17.649px;
      justify-content: center;
      align-items: center;
      img {
        width: 470px;
      }
    }
  }

  @media (max-width: 972px) {
    .image {
      display: none;
    }

    .container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }

    .content {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      padding: 0 15px;
    }

    .content {
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 1053px) {
    .image {
      display: none;
    }

    .container {
      width: 100%;
    }
  }
`;

export default Hero;
