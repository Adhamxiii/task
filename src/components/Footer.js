import React from "react";
import styled from "styled-components";
import { categories, social } from "../data";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div>
          <Logo />
          <p className="copyright">Digitaldastin by Dastin Darmawan</p>
          <div className="social-links">
            <SocialLinks socialData={social} />
          </div>
        </div>
        <div className="footer-link">
          <div className="category">
            <h3>Category</h3>
            {categories.map((category) => {
              return <p>{category.title}</p>;
            })}
            <p>More Category</p>
          </div>

          <div className="about">
            <h3>About Me</h3>
            <ul>
              <li>About me</li>
              <li>Projects</li>
              <li>Achievement</li>
            </ul>
          </div>
          <div className="connection">
            <h3>Get in touch</h3>
            <ul>
              <li>+62-8XXX-XXX-XX</li>
              <li>demo@gmail.com</li>
            </ul>
          </div>
          <div className="Follow">
            <h3>Follow us</h3>
            <ul>
              <li>Medium</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <hr />
        <div className="container">
          <p>© 2022 Digitaldastin</p>
          <p>Made With ❤️ Jakarta, Indonesia</p>
        </div>
      </footer>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 70px 48px 25px;
  background: #e4e5e9;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 160px;
  }

  .copyright {
    color: #2b2c34;
    font-size: 18px;
    font-weight: 400;
  }

  .social-links {
    display: flex;
    justify-content: flex-start;
    align-self: center;
    gap: 30px;
  }

  .footer-link {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 48px;
  }

  h3 {
    color: #2b2c34;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  p,
  li {
    color: #2b2c34;
    font-size: 18px;
    font-weight: 400;
  }

  footer {
    p {
      color: #2b2c34;
      font-size: 14px;
      font-weight: 400;
    }

    hr {
      width: 100%;
      height: 1px;
      background: #c0c0c0;
    }
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 50px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 15px;

    .container {
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }

    .social-links {
      justify-content: center;
    }

    .footer-link {
      flex-direction: column;
      gap: 50px;
    }

    .copyright {
      text-align: center;
    }
  }
`;

export default Footer;
