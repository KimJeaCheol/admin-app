import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
          padding: 3,
        }}
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
