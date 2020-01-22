import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c69672;
  box-sizing: border-box;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  display: ${props => (props.isShown ? "block" : "none")};
  color: #535353;
`;

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #535353;
`;

const MenuHeader = styled.div`
  height: 5%;
  width: 100%;
  text-align: right;

  h1 {
    margin: 0;
  }
`;

const LinkBar = styled.div`
  position: relative;
  height: 80%;

  div {
    height: 70%;
    width: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Button = styled(props => <Link {...props} />)`
  width: 100%;
  height: 70px;
  background-color: #e6be8a;
  color: #ffffff;
  border: 1px solid #e6be8a;
  outline: none;
  font-size: 15px;
  font-family: "Ibarra Real Nova", serif;
  text-align: center;
  text-decoration: none;
  padding: 25px;
`;

const MobileMenu = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown}>
      <MenuHeader>
        <h1 onClick={() => setIsShown(false)}>X</h1>
      </MenuHeader>
      <LinkBar>
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/educate">Educate</StyledLink>
          <Button to="contact">Contact</Button>
        </div>
      </LinkBar>
    </Modal>
  );
};

export default MobileMenu;
