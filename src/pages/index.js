import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import { MEDIA, COLORS } from "../constants/variables";
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

  div {
    width: 70%;

    @media (min-width: ${MEDIA.tablet}) {
      width: 500px;
    }
  }

  h2 {
    font-size: 20px;
    opacity: 0.9;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: 40px;
    }

    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    opacity: 0.8;
    font-size: xx-small;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: small;
    }

    @media (min-width: ${MEDIA.desktop}) {
      font-size: medium;
    }
  }
`;

const Content = styled.section`
  align-self: center;

  h2 {
    color: ${COLORS.lightBrown};
    font-size: xx-large;
  }

  p {
    color: ${COLORS.textDark};
    line-height: 25px;
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
    font-size: 20px;
    text-align: right;
    margin: 0;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: 36px;
    }

    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    font-size: x-small;
    text-align: right;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
  }
`;

const IndexPage = ({ data: datoCmsHome }) => {
  console.log(datoCmsHome);
  return (
    <Layout hoverNav={true}>
      <Hero image={datoCmsHome.datoCmsHome.heroImage.url}>
        <HeroContent>
          <div>
            <h2>{datoCmsHome.datoCmsHome.heroTitle}</h2>
            <p>{datoCmsHome.datoCmsHome.heroText}</p>
          </div>
        </HeroContent>
      </Hero>
      <Content className="container">
        <div className="row">
          <div className="col-lg-7 mt-5 mb-5">
            <div className="w-75 d-flex flex-column">
              <h2>{datoCmsHome.datoCmsHome.introTitle}</h2>
              <p>{datoCmsHome.datoCmsHome.introText}</p>
              <ButtonLink width="90px" className="mt-3" to="/about">
                More Details
              </ButtonLink>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mb-5 d-none d-lg-flex">
            <img
              className="w-100"
              src={datoCmsHome.datoCmsHome.introImage.url}
              alt={datoCmsHome.datoCmsHome.introImage.alt}
            />
          </div>
        </div>
      </Content>
      <Gallery />
      <CallToAction image={datoCmsHome.datoCmsHome.ctaImage.url}>
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-8 col-xs-10">
              <h2>{datoCmsHome.datoCmsHome.ctaTitle}</h2>
              <p>{datoCmsHome.datoCmsHome.ctaText}</p>
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
  {
    datoCmsHome {
      heroTitle
      heroText
      heroImage {
        url
      }
      introTitle
      introText
      introImage {
        url
        alt
      }
      ctaTitle
      ctaText
      ctaImage {
        url
      }
    }
  }
`;
