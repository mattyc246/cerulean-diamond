import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./ButtonLink";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c69672;
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
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

const MobileMenu = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown}>
      <MenuHeader>
        <FontAwesomeIcon onClick={() => setIsShown(false)} icon={faTimes} />
      </MenuHeader>
      <LinkBar>
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/educate">Educate</StyledLink>
          <ButtonLink width="70%" height="50px" to="/contact" padding="15px">
            Contact
          </ButtonLink>
        </div>
      </LinkBar>
    </Modal>
  );
};

export default MobileMenu;
