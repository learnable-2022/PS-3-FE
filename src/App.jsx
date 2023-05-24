import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerformanceAgreement from "./pages/PerformanceAgreement";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<PerformanceAgreement />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
