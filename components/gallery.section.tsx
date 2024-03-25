import styled from 'styled-components';
import Collage from './collage.component';

const GalleryStyled = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 0;
  gap: 40px;
  z-index: 100;
  .info__title {
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
  @media (min-width: 1280px) {
    padding: 0 100px;
    height: 100vh;
    background-color: red;
    justify-content: center;
    gap: 30px;
    box-shadow: none;
    background: inherit;
    padding: 0 2rem;
    .info__title {
      font-size: 2rem;
      letter-spacing: 5px;
      /* margin-bottom: 1rem; */
    }

    .info__quote {
      font-family: 'Playfair';
      font-style: italic;
      letter-spacing: 1px;
    }
  }
  color: rgb(15, 15, 15);
`;

const GallerySection = () => {
  return (
    <GalleryStyled id="gallery-section">
        <h2 className="info__title">GALERÍA</h2>
      {/* <div className="gallery__info">
        <p className="info__quote">Each tattoo tells a unique story, what will be yours?</p>
      </div> */}

      <Collage />
    </GalleryStyled>
  );
};

export default GallerySection;
