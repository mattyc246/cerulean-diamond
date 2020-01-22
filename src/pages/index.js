import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Hero = styled.section`
  width: 100%;
  height: 70vh;
  background-color: lightgray;
`;

const TestHero = styled.section`
  width: 100%;
  height: 70vh;
  background-color: gray;
`;

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <TestHero></TestHero>
  </Layout>
);

export default IndexPage;
