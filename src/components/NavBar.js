import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../assets/logos/logo.png";
import MobileMenu from "./MobileMenu";
import ButtonLink from "./ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: transparent;
  height: 100px;
  width: 100%;
  padding: 0px 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.hoverNav
      ? `
  position: absolute;
  top: 0px;
  z-index: 100;`
      : ""}
`;

const LinkBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;

  a {
    font-size: 15px;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  display: block;
  color: #e6be8a;
  font-size: 24px;
  @media (min-width: 840px) {
    display: none;
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #535353;

  &:hover {
    font-weight: 700;
  }
`;

const NavBar = ({ hoverNav }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Nav hoverNav={hoverNav}>
      <img src={logo} width="75px" alt="Cerulean Diamond Logo" />
      <LinkBar>
        <StyledLink activeClassName="is-active" to="/">
          Home
        </StyledLink>
        <StyledLink activeClassName="is-active" to="/about">
          About
        </StyledLink>
        <StyledLink activeClassName="is-active" to="/educate">
          Educate
        </StyledLink>
        <ButtonLink
          activeClassName="is-active"
          width="100px"
          height="30px"
          to="/contact"
        >
          Contact
        </ButtonLink>
      </LinkBar>
      <StyledIcon onClick={() => setIsShown(true)} icon={faBars} />
      <MobileMenu isShown={isShown} setIsShown={setIsShown} />
    </Nav>
  );
};

export default NavBar;
