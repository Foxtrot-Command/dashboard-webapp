import { Box, Container } from "@chakra-ui/react";
import { Data, Stats, Tools } from "features/Home";

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
