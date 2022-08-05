import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const StatsCardBox = ({ children, icon, title }) => (
    <Box
      height="auto"
      bg="whiteAlpha.200"
      w="300px"
      p={4}
      borderRadius={6}
      transition="all .2s ease-in-out"
      _hover={{
        transform: "translateY(-2px)",
        transition: "all .2s ease-in-out",
        cursor: "select",
        bg: "whiteAlpha.100"
      }}
    >
      <Flex gap={2}>
        {React.createElement(icon, { style: { marginTop: '3px' } })}
        <Box as="span">{title}</Box>
      </Flex>
  
      <Flex flexDirection="column" gap={2} mt={2}>
        {children}
      </Flex>
    </Box>
  )

export default StatsCardBox