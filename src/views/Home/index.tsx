import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Data from './Data';
import Stats from './Stats';
import Tools from './Tools';

const HomeWrapper = () => {

  return (
    <Container maxW='5xl' minHeight="777px">

      <Box as="section">
        <Stats />
        <Tools />
        <Data/>
      </Box>

    </Container >
  );
};

export default HomeWrapper;
