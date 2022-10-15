import React from "react";

import { Center, Spinner } from "@chakra-ui/react";

const LoadingContent = () => (
  <Center
    alignSelf="center"
    h="100%"
    position="absolute"
    top={0}
    bottom={0}
    left={0}
    right={0}
    m="auto"
  >
    <Spinner
      m="auto"
      thickness="4px"
      speed="0.65s"
      emptyColor="primary.200"
      color="primary.500"
      size="xl"
    />
  </Center>
);

export default LoadingContent;
