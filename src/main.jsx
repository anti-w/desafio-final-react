import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToggleColorMode } from "./helpers";

import Routes from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleColorMode>
      <CssBaseline />
      <Routes />
    </ToggleColorMode>
  </React.StrictMode>
);
