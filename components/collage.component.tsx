import { useRef } from "react";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";

const CollageStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;

  padding: 0 1rem;
  cursor: grab;
  user-select: none;

  margin: 0 auto;
  height: 100vh;
  max-height: 30rem;

  .gallery__column:not(:last-child) {
    margin-right: 1rem;
  }

  .gallery__column {
    flex-shrink: 0;
    width: 15rem;

    display: grid;
    gap: 1rem;
    border-radius: 1rem;
  }

  .column__variant_one {
    grid-template-rows: 1fr calc(40% - 2rem) 1fr;
  }
  .column__variant_two {
    grid-template-rows: calc(60% - 2rem) 1fr;
  }
  .column__variant_three {
    grid-template-rows: 1fr calc(60% - 2rem);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 0.5rem;
    border-radius: 30px;
    pointer-events: none;
  }

  @media (${(props) => props.theme.main.breakpoints.min.sm}) {
    max-height: 40rem;

    .gallery__column {
      width: 45%;
    }
  }

  @media (${(props) => props.theme.main.breakpoints.min.md}) {
    .gallery__column {
      width: 35%;
      gap: 2rem;
    }
    .gallery__column:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media (${(props) => props.theme.main.breakpoints.min.lg}) {
    .gallery__column {
      width: 25%;
    }
  }
`;

const Collage = () => {
  const containerRef = useRef(null);

  const bind = useGesture({
    onDrag: (event) => {
      if (event.dragging) {
        // @ts-ignore
        containerRef.current.scrollLeft -= event.delta[0];
      }
    },
  });

  return (
    <CollageStyled ref={containerRef} {...bind()}>
      <div className="transition-all gallery__column column__variant_three">
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710953739/fahknyqms1tefrb50oof.jpg" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710953824/bmn3mdoghduxchajkoag.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_one">
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710789657/jl20ikw12ykvd3he3oca.jpg" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710953783/idbogelvjjbdrjn2laiw.jpg" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710953844/ecogiytafnxvzfglgdn2.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_two">
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710955902/azeifyovi1fzan8mdynq.jpg" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710956012/wt27ewy1p6jwrnt5oft0.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_three">
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1709819712/i6qejvynniylisl7pa7s.jpg" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710953804/vbpnv8i9pkw7uaozv4pz.jpg" /> 
      </div>

      <div className="transition-all gallery__column column__variant_one">
      
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710955966/fknxfujt1evyslyb9mcz.png" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710956605/alp06uxfwwf4yfz8xmyt.png" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710956586/xws6cmoegtirri1dxj0b.png" />
      </div>

      <div className="transition-all gallery__column column__variant_two">
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1710956520/fhpnjojiudxfae4zyf1y.png" />
        <img src="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1709819823/tfrj8fenxprjawwrisar.jpg" />
      </div>
    </CollageStyled>
  );
};

export default Collage;