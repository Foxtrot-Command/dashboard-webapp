import React from 'react'

import {
  Box,
  Flex,
} from '@chakra-ui/react';

import InstagramPostCardVariant from './variants/InstagramPostCardVariant';
import InstagramStoriesCardVariant from './variants/InstagramStoriesCardVariant';
import {
  CardView,
  CardGeneratorForm
} from './components';

const CardPage = () => {

  return (
    <>
      <Flex
        gap={4}
        mt="10px"
        width="100%"
        maxWidth="1280px"
        minH="777px"
        mx="auto"
        alignItems="center"
        direction={{ base: "column", md: "column" }}
        px={{ base: 4, md: 4 }}
        mb={24}
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          gap={4}
          justifyContent="center"
        >
          <CardGeneratorForm />
          <Box
            h="40%"
            w="auto"
            p="40px"
            bg="whiteAlpha.100"
            borderRadius={8}
            position="relative"
          >
            <CardView />
          </Box>
        </Flex>

        <Flex flexDirection={{ base: "column", lg: "row" }} w="100%" gap={6}>
          <InstagramPostCardVariant />
          <InstagramStoriesCardVariant />
        </Flex>

      </Flex >
    </>


  )
}

export default CardPage;
