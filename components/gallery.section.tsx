import styled from "styled-components";
import Collage from "./collage.component";

const GalleryStyled = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 100px;
  .gallery__info {
    margin: 0 auto;
    margin-bottom: 3rem;
    text-align: center;

    .info__title {
      font-size: 1.5rem;
      letter-spacing: 5px;
      margin-bottom: 1rem;
    }

    .info__quote {
      font-family: "Playfair";
      font-style: italic;
      letter-spacing: 1px;
    }
  }
  color: rgb(15,15,15);
`;

const GallerySection = () => {
  return (
    <GalleryStyled id="gallery-section">
      <div className="gallery__info">
        <h2 className="info__title">ART GALLERY</h2>
        {/* <p className="info__quote">Each tattoo tells a unique story, what will be yours?</p> */}
      </div>

      <Collage />
    </GalleryStyled>
  );
};

export default GallerySection;
