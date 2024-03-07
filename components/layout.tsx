import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";

const LayoutStyled = styled.div`
  main {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};
