import React from "react";

import { Box, Container } from "@chakra-ui/react";
import { Data, Stats, Tools } from "views/Home";

const Home = () => {
  return (
    <Container maxW="5xl" minHeight="777px">
      <Box as="section">
        <Stats />
        <Tools />
        <Data />
      </Box>
    </Container>
  );
};

export default Home;
