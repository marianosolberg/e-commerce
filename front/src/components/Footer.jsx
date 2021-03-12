import React from "react";
import { Container, Toolbar, Typography, AppBar } from "@material-ui/core";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" align="right">
            © 2021 Plataforma
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
