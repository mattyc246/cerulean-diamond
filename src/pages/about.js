import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import InspectDiamond from "../assets/JWD-Image/02-About/10.png";

const StyledContent = styled.article`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 840px) {
    width: 100%;
  }

  h1 {
    color: #e6be8a;
    font-size: 48px;
    @media (max-width: 840px) {
      font-size: 28px;
    }
  }

  p {
    color: #535353;
    font-size: 20px;
    @media (max-width: 840px) {
      font-size: 14px;
    }
  }
`;

const About = () => (
  <Layout>
    <div className="container">
      <div className="row mb-5 mt-4">
        <div className="col-sm-7">
          <StyledContent>
            <h1>About Us</h1>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Nulla porttitor accumsan tincidunt.
            </p>
          </StyledContent>
        </div>
        <div className="col-sm-5">
          <img
            src={InspectDiamond}
            className="w-100 d-none d-sm-block"
            alt="Inspecting Diamond"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
