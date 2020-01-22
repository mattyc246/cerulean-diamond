import React from "react";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 150px;

  @media (max-width: 840px) {
    padding-bottom: 100px;
  }
`;

const Content = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
