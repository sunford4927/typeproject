import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./compoent/structure/Footer";
import Header from "./compoent/structure/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./compoent/Main";


function App() : JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="inner">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



