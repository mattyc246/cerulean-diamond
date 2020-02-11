import React from "react";
import styled from "styled-components";
import Logo from "../assets/logos/logo.png";
import { COLORS } from "../constants/variables";
import ButtonLink from "../components/ButtonLink";

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    color: ${COLORS.lightBrown};
  }

  p {
    color: ${COLORS.textDark};
  }
`;

const ErrorLogo = styled.img`
  max-width: 400px;
`;

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <ErrorLogo src={Logo} alt="cerulean-diamonds" />
        <h1>Page Not Found</h1>
        <p>
          We're sorry you have stumbled upon this page. Head home to find your
          way back.
        </p>
        <ButtonLink to="/">Home</ButtonLink>
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
