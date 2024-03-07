import styled from "styled-components";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo.svg";
import Navegation from "@/ui/atoms/navegation.atom";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 9;
  padding: 0.5rem;

  width: 100%;
  border-bottom: 1px solid;
  backdrop-filter: blur(5px);

  .header__logo {
    margin: 0 1rem;
  }

  @media (${(props) => props.theme.main.breakpoints.min.md}) {
    .header__logo {
      margin: 0 2rem;
    }

    padding: 1rem;
  }

  .header__navegation {
    position: relative;
    margin: 0 auto;
    display: flex;

    width: fit-content;
    align-items: center;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled className="transition-all">
      <div className="header__navegation">
        <Navegation>SHOP</Navegation>
        <Image src={LogoIcon} alt={"#section_home"} className="header__logo" />
        <Navegation>GALLERY</Navegation>
      </div>
    </HeaderStyled>
  );
};
/* 
# CSS


 .qodef-e-logo img{
  position:absolute;
  top:0;
  left:0;
  opacity:.6
}
.qodef-e-logo img:last-child:hover {
  -webkit-animation:qodef-glitch-effect .3s cubic-bezier(.22,1,.36,1) forwards;
  animation:qodef-glitch-effect .3s cubic-bezier(.22,1,.36,1) forwards
}

@keyframes qodef-glitch-effect {
  0% {
    -webkit-transform:translate(0);
    transform:translate(0)
  }
  20% {
    -webkit-transform:translate(-5px,5px);
    transform:translate(-5px,5px)
  }
  40% {
    -webkit-transform:translate(-5px,-5px);
    transform:translate(-5px,-5px)
  }
  60% {
    -webkit-transform:translate(5px,5px);
    transform:translate(5px,5px)
  }
  80% {
    -webkit-transform:translate(5px,-5px);
    transform:translate(5px,-5px)
  }
  to {
    -webkit-transform:translate(0);
    transform:translate(0)
  }
}


# HTML


 <span class="qodef-e-logo">
      <img
        width="204"
        height="137"
        src="https://tristero.qodeinteractive.com/dark/wp-content/uploads/2020/03/h1-dark-client-4.png"
        class="attachment-full size-full"
        alt="a"
        loading="lazy" />
      <img
        width="204"
        height="137"
        src="https://tristero.qodeinteractive.com/dark/wp-content/uploads/2020/03/h1-dark-client-4.png"
        class="attachment-full size-full"
        alt="a"
        loading="lazy"
    /></span>

*/
