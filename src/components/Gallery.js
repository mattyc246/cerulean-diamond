import React from "react";
import styled from "styled-components";
import { MEDIA } from "../constants/variables";

const GalleryContent = styled.section`
  width: 100%;
`;

const Masonry = styled.article`
  margin: 1.5em auto;
  column-count: 1;
  column-gap: 1em;

  @media (min-width: ${MEDIA.tablet}) {
    column-count: 2;
  }

  @media (min-width: ${MEDIA.desktop}) {
    column-count: 3;
  }
`;

const MasonryItem = styled.div`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  position: relative;

  img {
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Caption = styled.div`
  position: absolute;
  left: 0px;
  bottom: 5px;
  width: 90%;
  padding: 5%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);

  p {
    color: #535353;
    margin: 0;
  }
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContent className="container">
      <Masonry>
        {images.map(img => {
          return (
            <MasonryItem key={img.originalId}>
              <img className="w-100" src={img.url} alt={img.alt} />
              <Caption>
                <p>{img.title}</p>
              </Caption>
            </MasonryItem>
          );
        })}
      </Masonry>
    </GalleryContent>
  );
};

export default Gallery;
