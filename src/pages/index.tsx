import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';

const CardBoxElement = ({ title, link = '/' }) => {
  return (
    <Link href={link}>
      <Box
        w="230px"
        h="110px"
        bg="whiteAlpha.100"
        borderRadius={6}
        p={6}
        position="relative"
        transition="all .2s ease-in-out"
        _hover={{
          transform: "translateY(-5px)",
          transition: "all .2s ease-in-out",
          cursor: "pointer",
          bg: "whiteAlpha.200"
        }}
      >
        {title}
        <Box position="absolute" right={4} bottom={2}>
          <Icon as={ArrowForwardIcon} />

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
          Generadores
        </Heading>
        <Flex gap={5} flexWrap="wrap" justifyContent="space-between">

          <CardBoxElement title="Cartas" link="/generators/card"/>
          <CardBoxElement title="Post redes sociales" />
          <CardBoxElement title="Partnership" />
          <CardBoxElement title="Documento NDA" />
        </Flex>

      </Box>

    </Container>
  );
};

export default Home;
