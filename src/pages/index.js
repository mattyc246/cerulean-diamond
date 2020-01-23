import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import HeroImage from "../assets/JWD-Image/01-Home/01.png";
import CTAImage from "../assets/JWD-Image/01-Home/09.png";
import AboutImage from "../assets/JWD-Image/01-Home/02.png";
import Gallery from "../components/Gallery";

const Hero = styled.section`
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

const HeroContent = styled.header`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  div {
    width: 500px;
  }

  h2 {
    font-size: 48px;
    opacity: 0.9;
  }

  p {
    opacity: 0.8;
  }

  @media (max-width: 840px) {
    div {
      width: 70%;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: small;
      line-height: 25px;
    }
  }
`;

const Content = styled.section`
  align-self: center;

  h2 {
    color: #e6be8a;
    font-size: xx-large;
  }

  p {
    color: #535353;
    line-height: 25px;
  }
`;

const CallToAction = styled.section`
  width: 100%;
  height: 50vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  color: white;

  h2 {
    font-size: 48px;
    text-align: right;
    margin: 0;

    @media (max-width: 840px) {
      font-size: 36px;
    }
  }

  p {
    text-align: right;
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
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;

const IndexPage = () => (
  <Layout hoverNav={true}>
    <Hero image={HeroImage}>
      <HeroContent>
        <div>
          <h2>Lorem Ipsum Is Simply</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it.
          </p>
        </div>
      </HeroContent>
    </Hero>
    <Content className="container">
      <div className="row">
        <div className="col-md-7 mt-5 mb-5">
          <div className="w-75 d-flex flex-column">
            <h2>About Us</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet
              quam id dui posuere blandit. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Pellentesque in ipsum id orci
              porta dapibus.
            </p>
            <Button className="mt-3" to="/about">
              More Details
            </Button>
          </div>
        </div>
        <div className="col-md-5 mt-5 mb-5 d-none d-lg-flex">
          <img className="w-100" src={AboutImage} alt="Diamond Ring on Woman" />
        </div>
      </div>
    </Content>
    <Gallery></Gallery>
    <CallToAction image={CTAImage}>
      <div className="container">
        <div className="row justify-content-end align-items-center">
          <div className="col-md-8 col-xs-10">
            <h2>Lorem Ipsum Is</h2>
            <p>
              It is a long established fact that a reader will be distracted.
            </p>
            <Button className="ml-auto d-block" to="/about">
              Know More
            </Button>
          </div>
        </div>
      </div>
    </CallToAction>
  </Layout>
);

export default IndexPage;
