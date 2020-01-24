import React from "react";
import FourCs from "../assets/JWD-Image/03-4c/13.png";
import styled from "styled-components";
import Layout from "../components/Layout";
import { DATA } from "../constants/DiamondData";

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

  p {
    @media (min-width: 840px) {
      font-size: 24px;
    }
  }
`;

const SubArticle = styled.article`
  color: #535353;
  text-align: left;

  h2 {
    color: #e6be8a;
    margin: 0px 0px 20px 0px;
    @media (min-width: 840px) {
      font-size: 34px;
    }
  }

  p {
    @media (min-width: 840px) {
      font-size: 20px;
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
          <SubArticle>
            <h2>What is 4C?</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Nulla porttitor accumsan tincidunt.
            </p>
          </SubArticle>
        </div>
      </HeroSection>
      <div className="container pb-5">
        {DATA.map((article, index) => {
          return (
            <SubArticle key={index}>
              <img
                className="w-100 mt-4"
                src={article.imageUrl}
                alt={article.subTitle}
              />
              <h2>{article.subTitle}</h2>
              <p>{article.description}</p>
            </SubArticle>
          );
        })}
      </div>
    </Layout>
  );
};

export default Educate;
