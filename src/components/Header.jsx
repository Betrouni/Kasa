import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledHeader = styled.div`
height: 15vh;
width: 80%;
margin: auto;
  .header {
    font-family: "Montserrat";
    display: flex;
    justify-content: space-between;
    margin: 20px;
    font-size: 200%;
    text-align: center;
  }
  p {
    padding: 15px;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    /* or 34px */
    display: flex;

    color: #ff6060;
  }
  .left-header {
    /* background-color: purple; */
    padding-top: 20px;
    margin-left: 40px;
    size: 110%;
  }
  .right-header {
    display: flex;
    width: 40%;
    justify-content: space-between;
    p {
      width: 50%;
      width: auto;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="header">
        <div className="left-header">
          <Logo />
        </div>
        <div className="right-header">
        <StyledLink to='/Home'><p>Accueil</p></StyledLink>
          <StyledLink to='/APropos'><p>À Propos</p></StyledLink>
          
        </div>
      </div>
    </StyledHeader>
  );
}
