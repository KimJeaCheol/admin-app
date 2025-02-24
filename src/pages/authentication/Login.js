import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300,
        margin: "auto",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField label="Username" variant="outlined" fullWidth />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
