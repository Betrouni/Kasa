import React from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export default function Details() {
  return (
    <DetailContainer>
      <Accordion />
      <Accordion />
    </DetailContainer>
  );
}
