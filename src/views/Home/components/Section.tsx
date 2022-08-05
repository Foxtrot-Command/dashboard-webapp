import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Section = ({ title, children }) => (
    <>
      <Box mb={10}>
        <Heading my={4}>
          {title}
        </Heading>
        {children}
      </Box>
    </>
  )

export default Section