import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Navbar from "../components/layouts/Navbar/MainNavbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box my={10}>{children}</Box>
      </Container>
    </div>
  );
};

export default MainLayout;
