import React from 'react';
import ItemBox from './features/item/ItemBox';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPage from './components/AddPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemBox />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
