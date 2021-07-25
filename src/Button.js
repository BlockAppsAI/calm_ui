import React from "react";

import styled from "styled-components";

const MainContainer = styled.button`
  background-color: ${(props) => 
                props.color==="blue"?
                props.theme.colors.blue800:
                props.theme.colors.grey500};

  color: ${(props) => props.theme.colors.white};
  border-style: none;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0 2rem 0 2rem;
  font-weight: bold;
`;

export default function Button({color, text}){
    return (
        <MainContainer color={color}>
            {text}
        </MainContainer>
    )
}