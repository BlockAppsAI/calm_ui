import React from "react";

//styled components
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.blue1000};
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

const UserContainer = styled.div`
  background-color: ${(props) => props.theme.colors.blue400};
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NavBar() {
  return (
    <MainContainer>
      <Title>Calm</Title>
      <UserContainer>O</UserContainer>
    </MainContainer>
  );
}
