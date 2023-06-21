import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainNavigator from "./controller/MainNavigator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import "./config/Colors.css";
import "./view/dashboard/home/Dashboard.styles.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavigator />
    </BrowserRouter>
  </React.StrictMode>
);
