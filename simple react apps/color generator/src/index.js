import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export { Colors } from "./colors";
export { rgbToHex } from "./util";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
