import React from "react";
import FourCs from "../assets/JWD-Image/03-4c/13.png";
import styled from "styled-components";
import Layout from "../components/Layout";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  color: #535353;

  h1 {
    color: #e6be8a;
    margin-bottom: 10px;
    @media (min-width: 840px) {
      font-size: 48px;
    }
  }

  h2 {
    color: #e6be8a;

    @media (min-width: 840px) {
      font-size: 34px;
    }
  }

  p {
    @media (min-width: 840px) {
      font-size: 24px;
    }
  }

  article {
    text-align: left;
  }
`;

const SubArticle = styled.article`
  color: #535353;

  h2 {
    color: #e6be8a;

    @media (min-width: 840px) {
      font-size: 34px;
    }
  }

  p {
    @media (min-width: 840px) {
      font-size: 24px;
    }
  }
`;

const Educate = () => {
  return (
    <Layout>
      <HeroSection>
        <div className="container">
          <h1>4 C's Diamond Education</h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae.
          </p>
          <p>
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
            ligula. Nulla porttitor accumsan tincidunt.
          </p>
          <img
            className="w-75 d-block mx-auto"
            src={FourCs}
            alt="Diamond 4 C's"
          />
          <article>
            <h2>What is 4C?</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Nulla porttitor accumsan tincidunt.
            </p>
          </article>
        </div>
      </HeroSection>
      <SubArticle></SubArticle>
    </Layout>
  );
};

export default Educate;
