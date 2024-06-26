import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

// From react 18 we should use createRoot instead of ReactDOM
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
