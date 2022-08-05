import { Text, Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const CardBoxElement = ({
    identifier,
    title,
    link = '/',
    text = '',
    color = 'purple'
  }) => {
    return (
      <Link href={link}>
        <Box
          w="230px"
          h="110px"
          bg="whiteAlpha.100"
          borderRadius={6}
          py={8}
          px={4}
          position="relative"
          transition="all .2s ease-in-out"
          _hover={{
            transform: "translateY(-5px)",
            transition: "all .2s ease-in-out",
            cursor: "pointer",
            bg: "whiteAlpha.200"
          }}
  
        >
          <Text fontWeight="bold">
            {title}
          </Text>
  
          <Box position="absolute" left={4} top={2}>
            <Text fontSize="13px" fontWeight="light">{identifier}</Text>
          </Box>
  
          <Box position="absolute" right={4} bottom={2}>
            <Badge variant='subtle' colorScheme={color}>{text}</Badge>
          </Box>
        </Box>
      </Link>
    )
  }

export default CardBoxElement