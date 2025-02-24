import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Page Not Found
      </Typography>
      <Link to="/">Go back to Home</Link>
    </Box>
  );
};

export default NotFound;
