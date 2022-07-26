import { Badge, Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const CardBoxElement = ({
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
          <Text fontSize="13px" fontWeight="light">Generadores</Text>
        </Box>

        <Box position="absolute" right={4} bottom={2}>
          <Badge variant='subtle' colorScheme={color}>{text}</Badge>
        </Box>
      </Box>
    </Link>
  )
}
const Home = () => {
  return (
    <Container maxW='3xl' minHeight="777px">

      <Box as="section">

        <Heading my={4}>
          Herramientas
        </Heading>
        <Flex gap={5} flexWrap="wrap" justifyContent="space-between">

          <CardBoxElement title="Cartas" link="/generators/card" color="purple" text="Beta" />
          <CardBoxElement title="Post redes sociales" color="red" text="WIP" />
          <CardBoxElement title="Partnership" color="red" text="WIP" />
          <CardBoxElement title="Documento NDA" color="red" text="WIP" />
        </Flex>

      </Box>

    </Container>
  );
};

export default Home;
