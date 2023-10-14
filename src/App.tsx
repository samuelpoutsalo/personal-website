import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnglishApp from "./App-english";
import FinnishApp from "./App-finnish";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnglishApp />} />

          <Route path="/fi" element={<FinnishApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
