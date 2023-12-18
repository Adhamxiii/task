import React from "react";
import styled from "styled-components";

const SocialLinks = ({ socialData }) => (
  <>
    {socialData.map((social) => (
      <SocialIcon key={social.id} src={social.icon} alt={social.title} />
    ))}
  </>
);

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export default SocialLinks;
