import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MEDIA } from "../constants/variables";

const Footer = styled.footer`
  height: 175px;
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
    height: 150px;
    padding: 0px 3%;
  }

  div {
    box-sizing: border-box;
    width: 30%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${MEDIA.tablet}) {
      width: 45%;

      &:nth-child(3) {
        display: none;
      }
    }
  }

  p {
    font-size: xx-small;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: smaller;
    }
  }

  h6 {
    margin: 5px 0px;
  }
`;

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  color: #e6be8a;
  font-size: 48px;

  @media (max-width: 840px) {
    font-size: 24px;
  }
`;

const FooterBar = ({ jumpToTop }) => {
  const { footer } = useStaticQuery(graphql`
    query Footer {
      footer: datoCmsFooter {
        leftTitle
        leftText
        middleTitle
        middleText
        rightTitle
        rightText
      }
    }
  `);
  return (
    <Footer>
      <div>
        <h6>{footer.leftTitle.toUpperCase()}</h6>
        <p>{footer.leftText}</p>
      </div>
      <div>
        <h6>{footer.middleTitle.toUpperCase()}</h6>
        <p>{footer.middleText}</p>
      </div>
      <div>
        <h6>{footer.rightTitle.toUpperCase()}</h6>
        <p>{footer.rightText}</p>
      </div>
      <StyledIcon onClick={() => jumpToTop()} icon={faCaretSquareUp} />
    </Footer>
  );
};

export default FooterBar;
