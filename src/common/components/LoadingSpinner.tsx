import { Box, BoxProps, Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export const LoadingSpinner = (props: BoxProps) => (
  <Box h="100vh" {...props}>
    <Center alignSelf="center" h="100%">
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='primary.200'
        color='primary.500'
        size='xl'
      />
    </Center>
  </Box>
)
