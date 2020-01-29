import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import Layout from "../components/Layout";
import { COLORS, FONTSIZE } from "../constants/variables";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  color: ${COLORS.textDark};

  h1 {
    color: ${COLORS.lightBrown};
    margin-bottom: 10px;
    font-size: ${FONTSIZE.primaryTitle};
  }
`;

const SubArticle = styled.article`
  color: ${COLORS.textDark};
  text-align: left;

  h2 {
    color: ${COLORS.lightBrown};
    margin: 0px 0px 20px 0px;
    font-size: ${FONTSIZE.primarySubtitle};
  }
`;

const Educate = ({ data: { hero, fours } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={hero.seoMetaTags} />
      <HeroSection>
        <div className="container">
          <h1>{hero.heroTitle}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: hero.heroTextNode.childMarkdownRemark.html
            }}
          ></div>
          <img
            className="w-75 d-block mx-auto"
            src={hero.heroImage.url}
            alt={hero.heroImage.alt}
          />
          <SubArticle>
            <h2>{hero.heroSubtitle}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: hero.heroSubtextNode.childMarkdownRemark.html
              }}
            ></div>
          </SubArticle>
        </div>
      </HeroSection>
      <div className="container pb-5">
        {fours.nodes.map((article, index) => {
          return (
            <SubArticle key={article.id}>
              <img
                className="w-100 mt-4"
                src={article.image.url}
                alt={article.image.alt}
              />
              <h2>{article.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: article.textNode.childMarkdownRemark.html
                }}
              ></div>
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
      heroTextNode {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        url
        alt
      }
      heroSubtitle
      heroSubtextNode {
        childMarkdownRemark {
          html
        }
      }
    }
    fours: allDatoCmsFourC {
      nodes {
        id
        title
        textNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          url
          alt
        }
      }
    }
  }
`;
