import styled from "styled-components";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo.svg";
// import Logo from "./logo";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import MapMarkIcon from "@/assets/icons/mapMark.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Navegation from "@/ui/atoms/navegation.atom";
import Link from "next/link";
import { Instagram, Youtube, GeoAlt } from "react-bootstrap-icons";
const FooterStyled = styled.footer`
  .footer__content {
    padding: 5rem 1rem;
    margin: 0 auto;
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
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__content">
        <Image src={LogoIcon} alt={"#section_home"} />

        <div className="footer__sections">
          <Navegation href="#home-section">Home</Navegation>
          <Navegation href="#services-section">Servicios</Navegation>
          <Navegation href="#gallery-section">Galería</Navegation>
          <Navegation href="#form-section">Contacto</Navegation>
        </div>

        <div className="links-container">
          <Link href={"https://www.instagram.com/teoxys.tattoo/"} target="_blank"><Instagram color="black" size={28}/></Link>
          <Link href={"https://www.google.com/maps/place/Avellaneda,+Provincia+de+Buenos+Aires/@-34.6618832,-58.3719789,16z/data=!4m6!3m5!1s0x95a3335230bd052b:0x9d632a18eea90a31!8m2!3d-34.6610756!4d-58.3669739!16zL20vMDM2eWJx?entry=ttu"} target="_blank"><GeoAlt color="black" size={28}/></Link>
          {/* <Link href={"https://www.instagram.com/teoxys.tattoo/"} target="_blank"><Youtube color="black" size={28}/></Link> */}
        </div>
        <p className="quote">Un tatuaje es más que un dibujo, es un símbolo de tu identidad.</p>
      </div>

      <p className="footer__copyright">© 2024 Teoxys Tattoo, All Rights Reserved</p>
    </FooterStyled>
  );
};
