import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";

const Nav = styled.nav`
  background-color: transparent;
  height: 100px;
  width: 100%;
  padding: 0px 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const BurgerMenu = styled.button`
  display: block;
  outline: none;
  background: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  font-size: 20px;
  color: #e6be8a;
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

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Nav>
      <img src={logo} />
      <LinkBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/educate">Educate</StyledLink>
        <NavButton to="/contact">Contact</NavButton>
      </LinkBar>
      <BurgerMenu onClick={() => setIsShown(true)}>| | |</BurgerMenu>
      <MobileMenu isShown={isShown} setIsShown={setIsShown} />
    </Nav>
  );
};

export default NavBar;
