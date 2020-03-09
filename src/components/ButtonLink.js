import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { COLORS } from "../constants/variables";

const StyledButton = styled(props => <Link {...props} />)`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${COLORS.lightBrown};
  border-radius: 5px;
  border: 1px solid ${COLORS.lightBrown};
  color: ${COLORS.textLight};
  outline: none;
  font-size: 14px;
  font-family: "Ibarra Real Nova", serif;
  padding: ${props => (props.padding ? props.padding : "10px")};
  text-align: center;
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
`;

const ButtonLink = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default ButtonLink;
