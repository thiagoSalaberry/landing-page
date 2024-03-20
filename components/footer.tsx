import styled from "styled-components";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo.svg";
// import Logo from "./logo";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import MapMarkIcon from "@/assets/icons/mapMark.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Navegation from "@/ui/atoms/navegation.atom";

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
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__content">
        <Image src={LogoIcon} alt={"#section_home"} />

        <div className="footer__sections">
          <Navegation href="#home-section">Home</Navegation>
          <Navegation href="#services-section">Servicios</Navegation>
          <Navegation href="#gallery-section">Galeria</Navegation>
          <Navegation href="#form-section">Contacto</Navegation>
        </div>

        <div>
          <Image src={YoutubeIcon} alt={"#socialMedia_youtube"} />
          <Image src={MapMarkIcon} alt={"#socialMedia_markMap"} style={{ margin: "0 2.5rem" }} />
          <Image src={InstagramIcon} alt={"#socialMedia_intagram"} />
        </div>
        <p className="quote">Tattoos are more than just drawings, they are symbols of your identity and your experiences.</p>
      </div>

      <p className="footer__copyright">© 2024 Teoxys Tattoo, All Rights Reserved</p>
    </FooterStyled>
  );
};
