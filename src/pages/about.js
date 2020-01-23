import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import InspectDiamond from "../assets/JWD-Image/02-About/10.png";
import FaintDiamond from "../assets/JWD-Image/02-About/12.png";

const StyledContent = styled.article`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 840px) {
    width: 100%;
  }

  h1 {
    color: #e6be8a;
    font-size: 48px;
    @media (max-width: 840px) {
      font-size: 28px;
    }
  }

  p {
    color: #535353;
    font-size: 20px;
    @media (max-width: 840px) {
      font-size: 14px;
    }
  }
`;

const CallToAction = styled.section`
  height: 60vh;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CTAContent = styled.article`
  width: 50%;
  height: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 840px) {
    width: 80%;
  }

  h2 {
    color: #c69672;
    font-size: 48px;
    margin: 0;
    @media (max-width: 840px) {
      font-size: 28px;
    }
  }

  p {
    color: #e6be8a;
    font-size: larger;
    @media (max-width: 840px) {
      font-size: x-small;
    }
  }
`;

const Button = styled(props => <Link {...props} />)`
  width: 100px;
  height: 30px;
  background-color: #e6be8a;
  border-radius: 5px;
  border: 1px solid #e6be8a;
  color: #ffffff;
  outline: none;
  font-size: 14px;
  font-family: "Ibarra Real Nova", serif;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
`;

const About = () => (
  <Layout>
    <div className="container">
      <div className="row mb-5 mt-4">
        <div className="col-sm-7">
          <StyledContent>
            <h1>About Us</h1>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Nulla porttitor accumsan tincidunt.
            </p>
          </StyledContent>
        </div>
        <div className="col-sm-5">
          <img
            src={InspectDiamond}
            className="w-100 d-none d-sm-block"
            alt="Inspecting Diamond"
          />
        </div>
      </div>
    </div>
    <CallToAction image={FaintDiamond}>
      <CTAContent>
        <h2>Lorem Ipsum Is</h2>
        <p>It is a long established fact that a reader will be distracted.</p>
        <Button to="/contact">Contact</Button>
      </CTAContent>
    </CallToAction>
  </Layout>
);

export default About;
