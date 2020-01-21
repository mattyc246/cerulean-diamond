import React, { useState } from "react";
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

  @media (max-width: 840px) {
    display: none;
  }
`;

const BurgerMenu = styled.button`
  display: block;
  outline: none;
  cursor: pointer;
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

const NavButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #e6be8a;
  border-radius: 5px;
  color: #ffffff;
  outline: none;
  font-size: 15px;
  font-family: "Ibarra Real Nova", serif;
`;

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Nav>
      <img src={logo} />
      <LinkBar>
        <a>Home</a>
        <a>About</a>
        <a>Educate</a>
        <NavButton>Contact</NavButton>
      </LinkBar>
      <BurgerMenu onClick={() => setIsShown(true)}>| | |</BurgerMenu>
      <MobileMenu isShown={isShown} setIsShown={setIsShown} />
    </Nav>
  );
};

export default NavBar;
