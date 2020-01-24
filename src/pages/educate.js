import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import Layout from "../components/Layout";
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

const Educate = ({ data: { hero, fours } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={hero.seoMetaTags} />
      <HeroSection>
        <div className="container">
          <h1>{hero.heroTitle}</h1>
          <p>{hero.heroText}</p>
          <img
            className="w-75 d-block mx-auto"
            src={hero.heroImage.url}
            alt={hero.heroImage.alt}
          />
          <SubArticle>
            <h2>{hero.heroSubtitle}</h2>
            <p>{hero.heroSubtext}</p>
          </SubArticle>
        </div>
      </HeroSection>
      <div className="container pb-5">
        {fours.nodes.reverse().map((article, index) => {
          return (
            <SubArticle key={article.id}>
              <img
                className="w-100 mt-4"
                src={article.image.url}
                alt={article.image.alt}
              />
              <h2>{article.title}</h2>
              <p>{article.text}</p>
            </SubArticle>
          );
        })}
      </div>
    </Layout>
  );
};

export default Educate;

export const query = graphql`
  query EducatePage {
    hero: datoCmsEducate {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTitle
      heroText
      heroImage {
        url
        alt
      }
      heroSubtitle
      heroSubtext
    }
    fours: allDatoCmsFourC {
      nodes {
        id
        title
        text
        image {
          url
          alt
        }
      }
    }
  }
`;
