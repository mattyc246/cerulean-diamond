import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c69672;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isShown ? "block" : "none")};
`;

const MobileMenu = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown}>
      <h1 onClick={() => setIsShown(false)}>Menu</h1>
    </Modal>
  );
};

export default MobileMenu;
