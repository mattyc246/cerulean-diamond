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

const TestHero = styled.section`
  width: 100%;
  height: 70vh;
  background-color: gray;
`;

const IndexPage = () => (
  <Layout>
    <Hero image={HeroImage}></Hero>
  </Layout>
);

export default IndexPage;
