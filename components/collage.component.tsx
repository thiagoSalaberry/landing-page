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
        <img src="https://i.pinimg.com/236x/09/ae/54/09ae544b0318717817f1782aead9aad7.jpg" />
        <img src="https://i.pinimg.com/236x/d6/ce/30/d6ce30947cb4322cdbc11a99baa1786b.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_one">
        <img src="https://i.pinimg.com/236x/f6/80/79/f68079424fdd799afd1fe9ddcaba7d5d.jpg" />
        <img src="https://i.pinimg.com/236x/0d/fe/01/0dfe01798ee8671b7d1574f4eff55302.jpg" />
        <img src="https://i.pinimg.com/236x/84/9a/47/849a47445e4bdbab0c4f89ed96741dd3.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_two">
        <img src="https://i.pinimg.com/236x/9b/bc/48/9bbc489a9148ea94ad73b0b8cc1139e7.jpg" />
        <img src="https://i.pinimg.com/236x/7b/8d/5a/7b8d5adc47c94902d8b6e7256bf78a32.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_three">
        <img src="https://i.pinimg.com/236x/12/2a/04/122a042be8c3c07a6ae3269863321698.jpg" />
        <img src="https://i.pinimg.com/236x/94/4f/7f/944f7fb36ce5a4eed7dd2e1833b25ad5.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_one">
        <img src="https://i.pinimg.com/236x/6f/54/81/6f54812418e9592593e5dc25a6194b30.jpg" />
        <img src="https://i.pinimg.com/236x/2a/23/05/2a23050283e78df4ba7700329dc57291.jpg" />
        <img src="https://i.pinimg.com/236x/93/36/f1/9336f1eff199316ca4b79a153ada6f27.jpg" />
      </div>

      <div className="transition-all gallery__column column__variant_two">
        <img src="https://i.pinimg.com/236x/fa/8b/87/fa8b8702d0253392e3acc4a602cd3f08.jpg" />
        <img src="https://i.pinimg.com/236x/49/91/4b/49914b57e8f3488bc4d67b4019b82b15.jpg" />
      </div>
    </CollageStyled>
  );
};

export default Collage;
