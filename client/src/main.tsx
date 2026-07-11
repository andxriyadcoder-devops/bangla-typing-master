import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { KeyboardLayoutProvider } from "./context/KeyboardLayoutContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <KeyboardLayoutProvider>
        <App />
      </KeyboardLayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);