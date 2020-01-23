import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
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
    font-size: 14px;
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
`;

const NavButton = styled(props => <Link {...props} />)`
  width: 80px;
  height: 30px;
  background-color: #e6be8a;
  border-radius: 5px;
  border: 1px solid #e6be8a;
  color: #ffffff;
  outline: none;
  font-size: 14px;
  font-family: "Ibarra Real Nova", serif;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;

const NavBar = ({ hoverNav }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Nav hoverNav={hoverNav}>
      <img src={logo} alt="Cerulean Diamond Logo" />
      <LinkBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/educate">Educate</StyledLink>
        <NavButton to="/contact">Contact</NavButton>
      </LinkBar>
      <StyledIcon onClick={() => setIsShown(true)} icon={faBars} />
      <MobileMenu isShown={isShown} setIsShown={setIsShown} />
    </Nav>
  );
};

export default NavBar;
