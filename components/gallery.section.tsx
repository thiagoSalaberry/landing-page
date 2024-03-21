import styled from "styled-components";
import Collage from "./collage.component";

const GalleryStyled = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: -20px;
  border-radius: 25px 25px 0 0; */
  /* background: #747474; */
  /* background: var(--white-gradient);
  background: var(--white-gradient-inverse); */
  /* box-shadow: 0 -5px 15px 0 rgba(0,0,0,.15); */
  padding: 40px 0 60px 0;
  gap: 40px;
  z-index: 100;
  .info__title {
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
  @media (min-width: 1280px) {
    padding: 0 100px;
    height: 100vh;
    justify-content: center;
    gap: 30px;
    box-shadow: none;
    background: inherit;
    padding: 0 100px;
    .info__title {
      font-size: 2rem;
    }
  }
  color: rgb(15,15,15);
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
