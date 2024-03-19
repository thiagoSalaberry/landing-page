import styled from "styled-components";
import Navegation from "@/ui/atoms/navegation.atom";
import Logo from "@/components/logo";
const HeaderStyled = styled.div`
  position: absolute;
  z-index: 9;
  padding: 0.5rem;

  width: 100%;
  border-bottom: 1px solid rgb(255,255,255, .5);
  @media (min-width: 1280px) {
    border-bottom: 1px solid rgb(15,15,15);
  }

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
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    place-items: center;

    width: fit-content;
    margin: 0 auto;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled className="transition-all">
      <nav className="header__navegation">
        <Navegation>SHOP</Navegation>
        <Logo size={40}/>
        <Navegation>GALLERY</Navegation>
      </nav>
    </HeaderStyled>
  );
};