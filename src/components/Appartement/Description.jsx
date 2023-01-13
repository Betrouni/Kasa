import React from "react";
import Tag from "./Tag";
import styled from "styled-components";
import UserPic from "./UserPic.jsx";
import Rate from "./Rate.jsx";


const TopDescription = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

const LeftDescription = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ff6060;
  width: 70%;
`;
const RightDescription = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

const TopRight = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ff6060;

  display: flex;
  justify-content: flex-end;
  p {
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    width: 150px;
  }
`;

const BotRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

const MainDescription = styled.div`
  background-color: lightslategray;
`;
const TagContainer = styled.div`
  display: flex;
  width: 50%;
`;

export default function Description(props) {
  const {logement} = props

  React.useEffect(
    ()=>{
      console.log(logement)
    }, []
  )

  return (
    <div>
      <TopDescription>
        <LeftDescription>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <TagContainer>
            <Tag />
            <Tag />
            <Tag />
          </TagContainer>
        </LeftDescription>
        <RightDescription>
          <TopRight>
            <p>
              Nom <br></br> pélo
            </p>
            <UserPic />
          </TopRight>
          <BotRight>
            {/* <Rate rate={logement.rating}/> */}
          </BotRight>
        </RightDescription>
      </TopDescription>
      <MainDescription></MainDescription>
    </div>
  );
}
