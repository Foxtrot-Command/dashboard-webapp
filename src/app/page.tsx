import { Metadata } from "next";

import { Box, Container } from "@chakra-ui/react";
import { Data, Stats, Tools } from "features/Home";

export const metadata: Metadata = {
  title: "Trading Card Game",
};

export default function HomePage() {
  return (
    <Container maxW="5xl" minHeight="777px">
      <Box as="section">
        <Stats />
        <Tools />
        <Data />
      </Box>
    </Container>
  );
}
