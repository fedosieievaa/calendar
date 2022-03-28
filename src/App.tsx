import React from "react";
import styled from "styled-components";
import {Calendar} from "./components/Calendar";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(214, 240, 211);
`;
function App() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}

export default App;
