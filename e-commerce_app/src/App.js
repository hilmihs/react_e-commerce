import React from 'react';
import ItemBox from './features/item/ItemBox';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
