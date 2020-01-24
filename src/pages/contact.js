import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Diamonds from "../assets/JWD-Image/04-Contact/19.png";
import Necklace from "../assets/JWD-Image/04-Contact/18.png";

const StyledSection = styled.section`
  width: 100%;
  padding: 30px 0px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const ContactCard = styled.div`
  width: 75%;
  background-color: white;
  display: block;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.3);
  color: #e6be8a;
  border-radius: 5px;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

const FancyInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #e6be8a;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  color: #e6be8a;
  font-size: 16px;
  font-family: "Ibarra Real Nova", cursive;

  &::placeholder {
    color: #e6be8a;
    opacity: 0.9;
    font-size: 13px;
  }
`;

const FancyTextArea = styled.textarea`
  width: 100%;
  display: block;
  border: 1px solid #e6be8a;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 15px;
  resize: none;
  outline: none;
  color: #e6be8a;
  font-size: 16px;
  font-family: "Ibarra Real Nova", cursive;

  &::placeholder {
    color: #e6be8a;
    opacity: 0.9;
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 100%;
  display: block;
  height: 40px;
  background-color: #e6be8a;
  border-radius: 5px;
  border: 1px solid #e6be8a;
  color: #ffffff;
  outline: none;
  font-size: 14px;
  font-family: "Ibarra Real Nova", serif;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;

const Contact = () => {
  return (
    <Layout>
      <StyledSection image={Diamonds}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <ContactCard>
                <small>
                  <strong>Email</strong>
                </small>
                <FancyInput type="text" placeholder="Your email address" />
                <small>
                  <strong>Full Name</strong>
                </small>
                <FancyInput type="text" placeholder="Your full name" />
                <small>
                  <strong>Subject</strong> (Optional)
                </small>
                <FancyInput
                  type="text"
                  placeholder="Summary of your observation..."
                />
                <small>
                  <strong>Message</strong>
                </small>
                <FancyTextArea
                  placeholder="Give as many details as possible..."
                  rows="8"
                ></FancyTextArea>
                <Button>Submit</Button>
              </ContactCard>
            </div>
            <div className="col-md-5">
              <img
                className="w-100 d-none d-md-block mx-auto"
                src={Necklace}
                alt="Diamond Necklace"
              />
            </div>
          </div>
        </div>
      </StyledSection>
    </Layout>
  );
};

export default Contact;
