import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import { COLORS } from "../constants/variables";
import ButtonLink from "../components/ButtonLink";

const Hero = styled.section`
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

const HeroContent = styled.header`
  height: 100%;
  background-color: ${COLORS.overlay};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.textLight};
  text-align: center;

  .hero-container {
    width: 90%;
    max-width: 600px;
  }

  h2 {
    font-size: 48px;
    opacity: 0.9;
  }

  p {
    opacity: 0.8;
    text-align: "center";
  }
`;

const Content = styled.section`
  align-self: center;

  h2 {
    color: ${COLORS.lightBrown};
    font-size: 36px;
  }

  p {
    color: ${COLORS.textDark};
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
    font-size: 36px;
    text-align: right;
    margin: 0;
  }

  p {
    text-align: right;
  }
`;

const IndexPage = ({ data: { home } }) => {
  return (
    <Layout hoverNav={true}>
      <HelmetDatoCms seo={home.seoMetaTags} />
      <Hero image={home.heroImage.url}>
        <HeroContent>
          <div className="hero-container">
            <h2>{home.heroTitle}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: home.heroTextNode.childMarkdownRemark.html
              }}
            ></div>
          </div>
        </HeroContent>
      </Hero>
      <Content className="container">
        <div className="row">
          <div className="col-lg-7 mt-5 mb-5">
            <div className="w-75 d-flex flex-column">
              <h2>{home.introTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: home.introTextNode.childMarkdownRemark.html
                }}
              ></div>
              <ButtonLink width="90px" className="mt-3" to="/about">
                More Details
              </ButtonLink>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mb-5 d-none d-lg-flex">
            <img
              className="w-100"
              src={home.introImage.url}
              alt={home.introImage.alt}
            />
          </div>
        </div>
      </Content>
      <Gallery images={home.galleryImages} />
      <CallToAction image={home.ctaImage.url}>
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-8 col-xs-10">
              <h2>{home.ctaTitle}</h2>
              <p>{home.ctaText}</p>
              <ButtonLink width="100px" className="ml-auto d-block" to="/about">
                Know More
              </ButtonLink>
            </div>
          </div>
        </div>
      </CallToAction>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      heroTitle
      heroTextNode {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        url
      }
      introTitle
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      introImage {
        url
        alt
      }
      ctaTitle
      ctaText
      ctaImage {
        url
      }
      galleryImages {
        url
        alt
        title
        originalId
      }
    }
  }
`;
