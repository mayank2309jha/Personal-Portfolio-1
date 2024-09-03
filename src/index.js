import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-4/5">
        <App className="app" />
      </div>
    </div>
  </React.StrictMode>
);
