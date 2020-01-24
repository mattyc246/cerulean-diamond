import React from "react";
import FourCs from "../assets/JWD-Image/03-4c/13.png";
import styled from "styled-components";
import Layout from "../components/Layout";
import { DATA } from "../constants/DiamondData";
import { COLORS, MEDIA } from "../constants/variables";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  color: ${COLORS.textDark};

  h1 {
    color: ${COLORS.lightBrown};
    margin-bottom: 10px;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: 36px;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    font-size: small;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: large;
    }
  }
`;

const SubArticle = styled.article`
  color: ${COLORS.textDark};
  text-align: left;

  h2 {
    color: ${COLORS.lightBrown};
    margin: 0px 0px 20px 0px;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: 28px;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: 34px;
    }
  }

  p {
    font-size: small;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: large;
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
