import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import HeroImage from "../assets/JWD-Image/01-Home/01.png";

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

const TestHero = styled.section`
  width: 100%;
  height: 70vh;
  background-color: gray;
`;

const IndexPage = () => (
  <Layout>
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
    <TestHero></TestHero>
  </Layout>
);

export default IndexPage;
