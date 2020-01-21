import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  padding: 0px 142px;
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
  return (
    <Nav>
      <h1>Navgiation</h1>
      <LinkBar>
        <a>Home</a>
        <a>About</a>
        <a>Educate</a>
        <NavButton>Contact</NavButton>
      </LinkBar>
    </Nav>
  );
};

export default NavBar;
