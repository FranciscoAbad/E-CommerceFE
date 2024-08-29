import React from "react";
import "./assets/global.css";
import { createGlobalStyle } from "styled-components";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Landing } from "./pages/Landing";

const GlobalStyle = createGlobalStyle`
*{ 
  font-family: "Roboto", sans-serif;
  font-weight:500;
  margin:0;
  padding:0;
  color:black;
}
`;

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};
