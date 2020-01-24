import React from "react";
import styled from "styled-components";

const GalleryContent = styled.section`
  width: 100%;
`;

const Masonry = styled.article`
  margin: 1.5em auto;
  column-count: 3;
  column-gap: 1em;

  @media (max-width: 840px) {
    column-count: 2;
  }
`;

const MasonryItem = styled.div`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  position: relative;
`;

const Caption = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 70%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);

  p {
    color: #535353;
    margin: 0;

    @media (max-width: 840px) {
      font-size: 8px;
    }
  }

  @media (max-width: 840px) {
    height: 40px;
    width: 80%;
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
