import React from "react";
import styled from "styled-components";
import Color from "./Color";

const Wrapper = styled.div`
  margin: 100px;
  width: 1024px;
  height: auto;
`;

function App() {
  return (
    <Wrapper className="App">
      <Color />
    </Wrapper>
  );
}

export default App;
