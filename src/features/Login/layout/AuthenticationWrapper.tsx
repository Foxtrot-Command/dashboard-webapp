'use client';

import { Box, Flex, BoxProps } from '@chakra-ui/react'
import FoxtrotLogo from 'common/components/FoxtrotLogo'
import { motion } from 'framer-motion'

type AuthenticationWrapperProps = {
  children: React.ReactNode;
  pageTitle?: string;
}
const AuthenticationWrapper = (props: AuthenticationWrapperProps & BoxProps) => {

  const { children} = props;
  return (
    <Box
      minH="100vh"
      h="100%"
      w="100%"
      maxWidth="1360px"
      display="flex"
      m="auto"
      justifyContent="center" alignItems="center"
      position="relative"
    >
      <Box
        minH="100vh"
        h="100%"
        w="100%"
        display="flex"
        justifyContent="center" alignItems="center"
        position="relative"
      >
        <Flex
          as={motion.div}
          width="418px" height="auto"
          backgroundColor="alto.950"
          shadow="lg"
          borderRadius="base"
          flexDirection="column"
          gap={10}
          justify="space-evenly"
          p={6}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          position="relative"
        >
          <FoxtrotLogo center width="240px" />
          {children}
        </Flex>
      </Box>
    </Box>
  )
}

export default AuthenticationWrapper
