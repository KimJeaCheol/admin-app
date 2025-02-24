import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import React from "react";
import { RouterProvider } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import router from "./routes";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeProvider>
  );
};

export default App;
