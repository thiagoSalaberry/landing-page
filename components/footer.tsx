import styled from "styled-components";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo.svg";
// import Logo from "./logo";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import MapMarkIcon from "@/assets/icons/mapMark.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Navegation from "@/ui/atoms/navegation.atom";
import Link from "next/link";
import { Instagram, GeoAlt, Github, Linkedin } from "react-bootstrap-icons";
const FooterStyled = styled.footer`
    width: 100%;
    .footer__content {
    width: 100%;
    padding: 40px 20px;
    /* margin: 0 auto; */
    display: grid;

    gap: 2rem;
    place-items: center;
  }

  .footer__sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      letter-spacing: 5px;
    }
  }

  .quote {
    font-family: "Playfair";
    font-style: italic;
    text-align: center;
    color: rgb(15,15,15);
  }

  .footer__copyright {
    border-top: solid 1px;
    padding: 2rem 0;
    text-align: center;
    color: rgb(15,15,15);
  }
  .links-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .devs-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
  .devs-container-title {
    color: rgb(15,15,15);
    grid-column: 1/3;
    text-align: center;
  }
  .dev-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .dev-container:last-child {
    grid-row: 3;
  }
  .link {
    transition: all .1s;
  }
  .link:hover {
    transform: scale(1.1);
  }
  .link:active {
    transform: scale(0.97);
  }
  .dev-name {
    color: rgb(15,15,15);
    border-right: solid black 1px;
    padding-right: 10px;
  }
  @media (min-width: 1280px) {
      .devs-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 10px;
      column-gap: 40px;
    }
      .dev-container:last-child {
      grid-row: 2;
      grid-column: 2;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__content">
        <Image src={LogoIcon} alt={"#section_home"} />

        <div className="footer__sections">
          <Navegation href="#home-section" color="black">Home</Navegation>
          <Navegation href="#services-section" color="black">Servicios</Navegation>
          <Navegation href="#gallery-section" color="black">Galería</Navegation>
          <Navegation href="#form-section" color="black">Contacto</Navegation>
        </div>

        <div className="links-container">
          <Link className="link" href={"https://www.instagram.com/teoxys.tattoo/"} target="_blank"><Instagram color="black" size={28}/></Link>
          <Link className="link" href={"https://www.google.com/maps/place/Avellaneda,+Provincia+de+Buenos+Aires/@-34.6618832,-58.3719789,16z/data=!4m6!3m5!1s0x95a3335230bd052b:0x9d632a18eea90a31!8m2!3d-34.6610756!4d-58.3669739!16zL20vMDM2eWJx?entry=ttu"} target="_blank"><GeoAlt color="black" size={28}/></Link>
        </div>
        <p className="quote">Un tatuaje es más que un dibujo, es un símbolo de tu identidad.</p>
        <div className="devs-container">
          <p className="devs-container-title">Desarrollado por:</p>
          <div className="dev-container">
            <p className="dev-name">Thiago Salaberry</p>
            <Link className="link" href={"https://github.com/thiagoSalaberry"} target="_blank"><Github color="black" size={28}/></Link>
            <Link className="link" href={"https://www.linkedin.com/in/thiago-salaberry/"} target="_blank"><Linkedin color="black" size={28}/></Link>
          </div>
          <div className="dev-container">
            <p className="dev-name">Leonardo Fontán</p>
            <Link className="link" href={"https://github.com/Lio-n"} target="_blank"><Github color="black" size={28}/></Link>
            <Link className="link" href={"https://www.linkedin.com/in/leonardo-fontan/"} target="_blank"><Linkedin color="black" size={28}/></Link>
          </div>
        </div>
      </div>

      <p className="footer__copyright">© 2024 Teoxys Tattoo, All Rights Reserved</p>
    </FooterStyled>
  );
};
