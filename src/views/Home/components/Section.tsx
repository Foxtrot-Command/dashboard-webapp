import React from "react";

import { Box, Heading } from "@chakra-ui/react";

const Section = ({ title, children }) => (
  <>
    <Box mb={10}>
      <Heading my={4}>{title}</Heading>
      {children}
    </Box>
  </>
);

export default Section;
