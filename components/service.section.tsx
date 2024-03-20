import React from "react";
import styled from "styled-components";
import leonardImg from "@/assets/tattoo/leopard.png";
import birdImg from "@/assets/tattoo/bird.png";
import flowerImg from "@/assets/tattoo/flower.png";
import slideImg from "@/assets/slide.png";

const ServiceStyled = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  /* background: var(--background); */
  /* background: rgb(45, 69, 106); */
  /* background: rgb(45, 69, 106); */
  h2 {
    color: rgb(15,15,15);
    text-align: center;
  }
  height: 100vh;
  @media (min-width: 1280px) {
    height: 50vh;
  }
  .service__list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    place-content: center;
    list-style-type: none;
    padding: 1rem;
  }
`;

const ServiceSection = () => {
  interface CardInfo extends Pick<CardProps, "title" | "body" | "figure"> {}

  const cardInfo: CardInfo[] = [
    { title: "ASESORAMIENTO", body: "Despejamos todas tus consultas previas al turno.", figure: TATTOO_FIGURE.leopard },
    { title: "DISEÑO", body: "Plasmamos tu idea tal cual te la imagines.", figure: TATTOO_FIGURE.bird },
    { title: "CURADO", body: "Estamos por si te surge alguna duda durante el curado del tatuaje.", figure: TATTOO_FIGURE.flower },
  ];

  return (
    <ServiceStyled id="services-section">
      <h2>SERVICIOS</h2>
      <ul className="service__list">
        {cardInfo.map((item, index) => (
          <li key={index}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </ServiceStyled>
  );
};

const CardStyled = styled.div`
  border-radius: 0.5rem;
  padding: 1rem 2rem 5rem 2rem;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25);
  background: no-repeat url(${slideImg.src});
  /* background: no-repeat linear-gradient(90deg, rgb(255, 193, 48) 0%, rgb(172, 79, 29) 110%); */
  color: white;
  color: rgb(15,15,15);
  height: 100%;
  min-width: 20rem;
  max-width: 30rem;

  position: relative;
  overflow: hidden;

  .card__figure--leopard:before,
  .card__figure--bird:before,
  .card__figure--flower:before {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
  }

  .card__figure--leopard:before {
    width: 218px;
    height: 253px;
    right: -25px;
    top: 10px;
    background-image: url(${leonardImg.src});
    transform: rotate(20deg);
  }
  .card__figure--bird:before {
    width: 337px;
    height: 248px;
    right: -180px;
    top: -30px;
    background-image: url(${birdImg.src});
    transform: rotate(20deg);
  }
  .card__figure--flower:before {
    width: 305px;
    height: 224px;
    right: -130px;
    top: 45px;
    background-image: url(${flowerImg.src});
  }

  .card__info {
    width: 70%;

    .info__title {
      font-size: 1rem;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }

    .info__body {
      font-weight: 300;
      letter-spacing: 2px;
    }
  }
`;

enum TATTOO_FIGURE {
  "leopard",
  "bird",
  "flower",
}
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  body: string;
  figure: Partial<TATTOO_FIGURE>;
}

const Card: React.FC<CardProps> = ({ title, body, figure }) => {
  return (
    <CardStyled>
      <div className="card__info">
        <h3 className="info__title">{title}</h3>
        <p className="info__body">{body}</p>
      </div>
      <div className={`card__figure--${TATTOO_FIGURE[figure]}`} />
    </CardStyled>
  );
};

export default ServiceSection;
