import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import InspectDiamond from "../assets/JWD-Image/02-About/10.png";
import FaintDiamond from "../assets/JWD-Image/02-About/12.png";
import HeroImage from "../assets/JWD-Image/02-About/11.png";
import Ring from "../assets/JWD-Image/02-About/04.png";
import EarRings from "../assets/JWD-Image/02-About/06.png";
import Rings from "../assets/JWD-Image/02-About/08.png";

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
  height: 40vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: 840px) {
    height: 60vw;
  }
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

const HeroSection = styled.section`
  height: 50vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  position: relative;

  article {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0px 10%;
    display: flex;
    align-items: center;
    position: relative;

    h2 {
      color: #e6be8a;
      margin: 0;
      font-size: 48px;
      @media (max-width: 840px) {
        font-size: small;
      }
    }

    p {
      color: white;
      font-size: 20px;
      @media (max-width: 840px) {
        font-size: xx-small;
      }
    }

    div {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      @media (max-width: 840px) {
        height: 90%;
      }
    }
  }
`;

const StyledImage = styled.img`
  position: absolute;
  width: ${props => props.width};
  ${props => (props.top ? `top: ${props.top};` : "")}
  ${props => (props.right ? `right: ${props.right};` : "")}
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 840px) {
    display: none;
  }
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
    <HeroSection image={HeroImage}>
      <article>
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae.
          </p>
          <p>
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
            ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam
            id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.{" "}
          </p>
        </div>
        <StyledImage src={Ring} width="15%" bottom="-20%" alt="Ring" />
        <StyledImage
          src={EarRings}
          width="15%"
          top="-5%"
          right="10%"
          alt="Diamond Ear Rings"
        />
        <StyledImage
          src={Rings}
          width="20%"
          bottom="-15%"
          right="12%"
          alt="Diamond Rings"
        />
      </article>
    </HeroSection>
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
