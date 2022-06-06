import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <Header />
      <MainContent>
        <Main />
        <Sidebar />
      </MainContent>
    </div>
  );
}

export default App;
