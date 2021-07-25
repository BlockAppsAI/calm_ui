import React from "react";
import styled from "styled-components";

//icons
import ArrowRight from "./Assests/Icons/arrowRight";

const MainContainer = styled.div`
  border: 1px solid grey;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;
const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.middle};
  /* font-weight: bold; */
  margin-bottom: 1rem;
`;

const Texts = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const OpenContainer = styled.div`
  background-color: ${(props) => props.theme.colors.blue400};
  display: flex;
  justify-content: flex-end;
  padding: 0rem 1rem 0rem 0rem;
  align-items: center;

`;

export default function Project({ title, workingBranch, comments }) {
  return (
    <MainContainer>
      <TextsContainer>
        <Title>{title}</Title>
        <Texts>Working Branch: {workingBranch}</Texts>
        <Texts>
          Comments: {comments !== "" ? "Yes from " + comments : "No"}
        </Texts>
      </TextsContainer>
      <OpenContainer>
          <ArrowRight/>
      </OpenContainer>
    </MainContainer>
  );
}
