import Link from "next/link";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  position: relative;
  top: 0;
  display: inline-block;
  color: #fff;

  width: auto;
  margin: 0;

  font-size: 18px;
  line-height: 2em;

  letter-spacing: 0.2em;
  font-weight: 700;
  text-decoration: none;

  text-transform: uppercase;
  border-radius: 0;
  outline: 0;
  justify-self: flex-end;
  box-sizing: border-box;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  padding: 9px 5px 8px 5px;
  font-family: "Roboto Serif";
  &:hover::after,
  &:hover::before {
    transform: scaleX(1);
  }

  &::before {
    left: -15px;
    transform-origin: left;
  }

  &::after {
    right: -15px;
    transform-origin: right;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: calc(50% + 16px);

    bottom: calc(50% - 2px);
    height: 1px;
    background-color: currentColor;

    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), -webkit-transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
`;

interface NavegationProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Navegation: React.FC<NavegationProps> = ({ children, className = "", href = "", ...props }) => {
  return (
    <LinkStyled className={className} href={href} target="_blank">
      <span>{children}</span>
    </LinkStyled>
  );
};

export default Navegation;
