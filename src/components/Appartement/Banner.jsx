import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  border-radius: 25px;
  height: 500px;
  width: 80%;
  margin: auto;
  position: relative;
  text-align: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
  }
 

`;

export default function AppartementBanner(props) {
  const {logement} = props
  return (
    <div>
      <StyledBanner>
        <img src={logement.cover} alt="nature img" />
      </StyledBanner>
    </div>
  );
}
