import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/variables";
import ButtonLink from "../components/ButtonLink";

const Article = styled.article`
  h2, h4 {
    color: ${COLORS.lightBrown};
  }

  p {
    color: ${COLORS.textDark};
  }

  .col-lg-5 {
    background-image: url('${props => props.imageurl}');
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 250px;
  }
`;

const ArticleGallery = ({ articles }) => {
  return (
    <div className="container">
      {articles.map((article, index) => {
        console.log(index);
        console.log(articles.length);
        return (
          <Article
            className={`row mt-5 mb-5 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            imageurl={article.image.url}
            key={article.id}
          >
            <div className="col-lg-7">
              <h4>{article.title}</h4>
              <h2>{article.subtitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: article.bodyNode.childMarkdownRemark.html
                }}
              ></div>
              {index === articles.length - 1 ? (
                <ButtonLink to="/contact">Contact Us</ButtonLink>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-5"></div>
          </Article>
        );
      })}
    </div>
  );
};

export default ArticleGallery;
