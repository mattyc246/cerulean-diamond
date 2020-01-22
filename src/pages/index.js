import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import HeroImage from "../assets/JWD-Image/01-Home/01.png";

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  div {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
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
      <div></div>
    </Hero>
  </Layout>
);

export default IndexPage;
