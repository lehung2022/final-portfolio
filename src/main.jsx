import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";

// Lấy phần tử DOM
const rootElement = document.getElementById("root");
// Tạo root một lần duy nhất
const root = ReactDOM.createRoot(rootElement);

// Render ứng dụng
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
