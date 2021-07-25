import "./App.css";

// styled components
import styled from "styled-components";

//components
import NavBar from "./NavBar";
import Projects from "./Projects";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.grey100};
`;

const MainBody = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.black};
  padding: 3rem;
  max-width: 80rem;
  margin: 0 auto;
`

function App() {
  return (
    <MainContainer>
      <NavBar/>
      <MainBody>
        <Projects title="Your Projects"/>
      </MainBody>
    </MainContainer>
  );
}

export default App;
