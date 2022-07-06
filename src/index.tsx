import React from 'react';
import { render } from 'react-dom';
import App from './App';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";


render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
