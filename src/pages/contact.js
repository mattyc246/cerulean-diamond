import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import Layout from "../components/Layout";
import { COLORS, FONTSIZE } from "../constants/variables";
import { graphql } from "gatsby";

const StyledSection = styled.section`
  width: 100%;
  padding: 30px 0px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;

  h1 {
    color: ${COLORS.lightBrown};
    margin: 0px 0px 30px 0px;
    font-size: ${FONTSIZE.primaryTitle};
  }

  p {
    color: ${COLORS.textDark};
    margin: 20px 0px;
  }
`;

const ContactCard = styled.div`
  width: 100%;
  background-color: white;
  display: block;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.3);
  color: ${COLORS.lightBrown};
  border-radius: 5px;
`;

const FancyInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid ${COLORS.lightBrown};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  color: ${COLORS.lightBrown};
  font-size: ${FONTSIZE.inputText};
  font-family: "Ibarra Real Nova", cursive;

  &::placeholder {
    color: ${COLORS.lightBrown};
    opacity: 0.9;
    font-size: ${FONTSIZE.placeholderText};
  }
`;

const FancyTextArea = styled.textarea`
  width: 100%;
  display: block;
  border: 1px solid ${COLORS.lightBrown};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 15px;
  resize: none;
  outline: none;
  color: ${COLORS.lightBrown};
  font-size: ${FONTSIZE.inputText};
  font-family: "Ibarra Real Nova", cursive;

  &::placeholder {
    color: ${COLORS.lightBrown};
    opacity: 0.9;
    font-size: ${FONTSIZE.placeholderText};
  }
`;

const Button = styled.button`
  width: 100%;
  display: block;
  height: 40px;
  background-color: ${COLORS.lightBrown};
  border-radius: 5px;
  border: 1px solid ${COLORS.lightBrown};
  color: ${COLORS.textLight};
  outline: none;
  font-size: 14px;
  font-family: "Ibarra Real Nova", serif;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;

const Contact = ({ data: { contact } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={contact.seoMetaTags} />
      <StyledSection image={contact.backgroundImage.url}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h1>{contact.title}</h1>
              <p>{contact.subtitle}</p>
              <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <ContactCard>
                  <small>
                    <strong>Email</strong>
                  </small>
                  <FancyInput name="email" type="text" placeholder="Your email address" />
                  <small>
                    <strong>Full Name</strong>
                  </small>
                  <FancyInput name="fullname" type="text" placeholder="Your full name" />
                  <small>
                    <strong>Subject</strong> (Optional)
                  </small>
                  <FancyInput
                    name="subject"
                    type="text"
                  />
                  <small>
                    <strong>Message</strong>
                  </small>
                  <FancyTextArea
                    name="message"
                    rows="8"
                  ></FancyTextArea>
                  <Button>Submit</Button>
                </ContactCard>
              </form>
            </div>
            <div className="col-lg-5">
              <img
                className="w-100 d-none d-lg-block mx-auto"
                src={contact.image.url}
                alt={contact.image.alt}
              />
            </div>
          </div>
        </div>
      </StyledSection>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ContactPage {
    contact: datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      image {
        url
        alt
      }
      backgroundImage {
        url
        alt
      }
    }
  }
`;
