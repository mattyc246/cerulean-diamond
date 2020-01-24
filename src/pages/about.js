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
import { MEDIA, COLORS } from "../constants/variables";

const StyledContent = styled.article`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${MEDIA.tablet}) {
    width: 100%;
  }

  h1 {
    color: ${COLORS.lightBrown};
    font-size: 28px;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: 36px;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    color: ${COLORS.textDark};
    font-size: small;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: large;
    }
  }
`;

const HeroSection = styled.section`
  height: 70vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  position: relative;

  @media (min-width: ${MEDIA.tablet}) {
    height: 60vw;
  }

  @media (min-width: ${MEDIA.desktop}) {
    height: 50vw;
  }

  article {
    width: 100%;
    height: 100%;
    background-color: ${COLORS.overlay};
    padding: 0px 10%;
    display: flex;
    align-items: center;
    position: relative;

    h2 {
      color: ${COLORS.lightBrown};
      margin: 0;
      font-size: 28px;

      @media (min-width: ${MEDIA.tablet}) {
        font-size: 36px;
      }

      @media (min-width: ${MEDIA.desktop}) {
        font-size: 48px;
      }
    }

    p {
      color: ${COLORS.textLight};
      font-size: xx-small;

      @media (min-width: ${MEDIA.tablet}) {
        font-size: medium;
      }

      @media (min-width: ${MEDIA.desktop}) {
        font-size: large;
      }
    }

    div {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      @media (min-width: ${MEDIA.tablet}) {
        height: 40%;
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
  display: none;

  @media (min-width: ${MEDIA.tablet}) {
    display: none;
  }

  @media (min-width: ${MEDIA.desktop}) {
    display: block;
  }
`;

const CallToAction = styled.section`
  height: 60vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (min-width: ${MEDIA.tablet}) {
    height: 40vw;
  }
`;

const CTAContent = styled.article`
  width: 80%;
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

  @media (min-width: ${MEDIA.tablet}) {
    width: 50%;
  }

  h2 {
    color: ${COLORS.darkBrown};
    font-size: 28px;
    margin: 0;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: 36px;
    }

    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    color: ${COLORS.lightBrown};
    font-size: x-small;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: larger;
    }
  }
`;

const Button = styled(props => <Link {...props} />)`
  width: 100px;
  height: 30px;
  background-color: ${COLORS.lightBrown};
  border-radius: 5px;
  border: 1px solid ${COLORS.lightBrown};
  color: ${COLORS.textLight};
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
