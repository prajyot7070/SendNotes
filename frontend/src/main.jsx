import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./context/AppContext"; // Ensure this matches

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider> {/* Ensure correct name here */}
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
