import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import { MEDIA, COLORS } from "../constants/variables";
import { graphql } from "gatsby";

const StyledContent = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${COLORS.lightBrown};
    font-size: 48px;
  }

  p {
    color: ${COLORS.textDark};
  }
`;

const HeroSection = styled.section`
  height: 70vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  position: relative;

  @media (min-width: ${MEDIA.tablet}) {
    height: 60vw;
  }

  @media (min-width: ${MEDIA.desktop}) {
    height: 50vw;
  }

  article {
    width: 100%;
    height: 100%;
    background-color: ${COLORS.overlay};
    padding: 0px 10%;
    display: flex;
    align-items: center;
    position: relative;

    h2 {
      color: ${COLORS.lightBrown};
      margin: 0;
      font-size: 48px;
    }

    p {
      color: ${COLORS.textLight};
    }

    div {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      @media (min-width: ${MEDIA.tablet}) {
        height: 40%;
      }
    }
  }
`;

const StyledImage = styled.img`
  position: absolute;
  width: ${props => props.width};
  ${props => (props.top ? `top: ${props.top};` : "")}
  ${props => (props.right ? `right: ${props.right};` : "")}
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: none;

  @media (min-width: ${MEDIA.tablet}) {
    display: none;
  }

  @media (min-width: ${MEDIA.desktop}) {
    display: block;
  }
`;

const CallToAction = styled.section`
  height: 60vw;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (min-width: ${MEDIA.tablet}) {
    height: 40vw;
  }
`;

const CTAContent = styled.article`
  width: 80%;
  height: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: ${MEDIA.tablet}) {
    width: 50%;
  }

  h2 {
    color: ${COLORS.darkBrown};
    font-size: 28px;
    margin: 0;

    @media (min-width: ${MEDIA.tablet}) {
      font-size: 36px;
    }

    @media (min-width: ${MEDIA.desktop}) {
      font-size: 48px;
    }
  }

  p {
    color: ${COLORS.lightBrown};
    font-size: x-small;
    @media (min-width: ${MEDIA.tablet}) {
      font-size: medium;
    }
    @media (min-width: ${MEDIA.desktop}) {
      font-size: larger;
    }
  }
`;

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />
    <div className="container">
      <div className="row mb-5 mt-4">
        <div className="col-sm-7">
          <StyledContent>
            <h1>{about.heroTitle}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: about.heroTextNode.childMarkdownRemark.html
              }}
            ></div>
          </StyledContent>
        </div>
        <div className="col-sm-5">
          <img
            src={about.heroImage.url}
            className="w-100 d-none d-sm-block"
            alt={about.heroImage.alt}
          />
        </div>
      </div>
    </div>
    <HeroSection image={about.contentImage.url}>
      <article>
        <div>
          <h2>{about.contentTitle}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: about.contentTextNode.childMarkdownRemark.html
            }}
          ></div>
        </div>
        <StyledImage
          src={about.hoverImages[0].url}
          width="15%"
          bottom="-20%"
          alt={about.hoverImages[0].alt}
        />
        <StyledImage
          src={about.hoverImages[1].url}
          width="15%"
          top="-5%"
          right="10%"
          alt={about.hoverImages[1].alt}
        />
        <StyledImage
          src={about.hoverImages[2].url}
          width="20%"
          bottom="-15%"
          right="12%"
          alt={about.hoverImages[2].alt}
        />
      </article>
    </HeroSection>
    <CallToAction image={about.ctaImage.url}>
      <CTAContent>
        <h2>{about.ctaTitle}</h2>
        <p>{about.ctaSubtitle}</p>
        <ButtonLink width="80px" to="/contact">
          Contact
        </ButtonLink>
      </CTAContent>
    </CallToAction>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutPage {
    about: datoCmsAbout {
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
      contentTitle
      contentTextNode {
        childMarkdownRemark {
          html
        }
      }
      contentImage {
        url
      }
      hoverImages {
        url
        alt
        originalId
      }
      ctaTitle
      ctaSubtitle
      ctaImage {
        url
      }
    }
  }
`;
