import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { typography } from "@/theme/typography";
import { palette } from "./theme/palette";
import DisableZoom from "./pages/DisableZoom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: typography,
  palette: palette,
});
const queryClient = new QueryClient();
root.render(
  <GoogleOAuthProvider clientId="1077667043055-muvrsck9gbbir9fn2vdbossmgttsc3ce.apps.googleusercontent.com">
    <QueryClientProvider client={queryClient}> 
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <DisableZoom />
          <CssBaseline />
          <Router />
          <ToastContainer />
        </ThemeProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
