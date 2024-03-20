import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  cursor: pointer;
  position: relative;
  display: inline-block;
  color: #fff;
  @media (min-width: 1280px) {
    color: rgb(15,15,15);
  }

  vertical-align: middle;
  width: auto;
  margin: 0;

  font-size: 18px;
  line-height: 2em;

  letter-spacing: 0.2em;
  font-weight: 600;
  text-decoration: none;

  text-transform: uppercase;
  border-radius: 0;
  outline: 0;
  justify-self: flex-end;
  box-sizing: border-box;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  padding: 9px 5px 8px 5px;

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
  .tooltip__container {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  .tooltip__triangle {
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, .3);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  .tooltip__advise {
      background: none;
      border: solid 1px rgb(255,255,255);
      padding: 0px 5px;
      border-radius: 5px;
      color: white;
      color: rgba(255, 255, 255, 1);
      font-size: 12px;
    }
    @media (min-width: 1280px) {
      .tooltip__advise {
        background: var(--white);
        border: solid 1px rgb(15,15,15);
        color: rgba(15, 15, 15, 1);
    }
  }
  .tooltip__container.visible {
    opacity: 1;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
`;

interface NavegationProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Navegation: React.FC<NavegationProps> = ({ children, className = "", href = "", onClick, ...props }) => {
  const [visible, setVisible] = useState(false);
  return (
    <LinkStyled href={href} onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} className={className}>
      <span>{children}</span>
      {children != "SHOP" ? null : (
        <div className={`${!visible ? "tooltip__container" : "tooltip__container visible"}`}>
          {/* <div className="tooltip__triangle"></div> */}
          <p className="tooltip__advise">PROXIMAMENTE</p>
        </div>
      )}
    </LinkStyled>
  );
};

export default Navegation;
