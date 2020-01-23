import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #c69672;
  color: white;
  box-sizing: border-box;
  padding: 0px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 840px) {
    height: 100px;
  }

  div {
    box-sizing: border-box;
    width: 30%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: small;
    }

    h6 {
      margin: 10px 0px;
    }

    @media (max-width: 840px) {
      h6 {
        font-size: 8px;
      }

      p {
        font-size: 6px;
      }
    }
  }

  button {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: #e6be8a;
    border: 4px solid #e6be8a;
    font-size: 28px;
  }
`;

const FooterBar = () => {
  return (
    <Footer>
      <div>
        <h6>START A PROJECT</h6>
        <p>We are ready for the challenge CeruleanDiamonds@mail.com</p>
      </div>
      <div>
        <h6>SAY HELLO</h6>
        <p>497 Evergreen Rd. Roseville, CA 95673 +44-345-678-903</p>
      </div>
      <div>
        <h6>JOBS</h6>
        <p>We are ready for the challenge CeruleanDiamonds@mail.com</p>
      </div>
      <button>&#8679;</button>
    </Footer>
  );
};

export default FooterBar;