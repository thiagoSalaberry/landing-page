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
  justify-content: flex-start;
  background: var(--white-gradient-inverse);
  border-radius: 25px 25px 0 0;
  box-shadow: 0 -5px 10px 0px rgba(0,0,0,.15);
  margin-top: -20px;
  padding: 40px 0 60px 0;
  gap: 40px;
  z-index: 20;
  height: 100%;
  h2 {
    color: rgb(15,15,15);
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 5px;
    font-family: "Poppins";
    font-family: "Roboto Serif";
  }
  @media (min-width: 1280px) {
    height: 50vh;
    justify-content: center;
    gap: 30px;
    background: inherit;
    box-shadow: none;
    padding: 0;
    h2 {
      font-size: 2rem;
    }
  }
  .service__list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    place-content: center;
    list-style-type: none;
    padding: 0 1rem;
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
      <h2 className="services__title">SERVICIOS</h2>
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
  /* padding: 1rem 2rem 5rem 2rem; */
  padding: 20px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25);
  /* background: no-repeat url(${slideImg.src}); */
  /* background: no-repeat linear-gradient(90deg, rgb(255, 193, 48) 0%, rgb(172, 79, 29) 110%); */
  color: white;
  color: rgb(15,15,15);
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: 500px; */
  max-width: 500px;
  height: 170px;
  /* font-family: "Poppins"; */
  position: relative;
  overflow: hidden;
  /* background: #6E95BA; */
  z-index: -2;
  @media (min-width: 1280px) {
    font-family: "Roboto Serif";
    
  }
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
    /* background-image: url(${leonardImg.src}); */
    transform: rotate(20deg);
  }
  .card__figure--bird:before {
    width: 337px;
    height: 248px;
    right: -180px;
    top: -30px;
    /* background-image: url(${birdImg.src}); */
    transform: rotate(20deg);
  }
  .card__figure--flower:before {
    width: 305px;
    height: 224px;
    right: -130px;
    top: 45px;
    /* background-image: url(${flowerImg.src}); */
  }

  .card__info {
    z-index: 50;
    width: 100%;
    .info__title {
      font-size: 1.3rem;
      letter-spacing: 2px;
      margin-bottom: .5rem;
      text-align: center;
    }
    
    .info__body {
      text-align: center;
      font-weight: 400;
      letter-spacing: 2px;
      margin: 0;
    }
  }
  .top-right, .bottom-left {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    z-index: -1;
  }
  .bottom-left {
    top: inherit;
    right: inherit;
    bottom: 0;
    left: 0;
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
      <img src="/top-right.png" className="top-right" alt="" />
      <div className="card__info">
        <h3 className="info__title">{title}</h3>
        <p className="info__body">{body}</p>
      </div>
      {/* <div className={`card__figure--${TATTOO_FIGURE[figure]}`} /> */}
      <img src="/bottom-left.png" className="bottom-left" alt="" />
    </CardStyled>
  );
};

export default ServiceSection;
