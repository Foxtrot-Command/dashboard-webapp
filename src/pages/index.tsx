import { Badge, Box, Container, Flex, Heading, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaDiscord, FaInstagram, FaInstagramSquare, FaTelegramPlane, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa';

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

const StatElement = ({ label, followers }) => {
  return (
    <Flex gap={2}>
      <Badge my="auto" py={1} px={2} borderRadius={4} w="60px">
        <Flex gap={1} justifyContent="center">
          <Box as={FaUser} mt="2px" />
          <Text>{followers}</Text>
        </Flex>
      </Badge>

      <Text>{label}</Text>
    </Flex>
  )
}

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

const Stats = () => {
  return (

    <Box position="relative">

      <Box position="absolute" right={4} top={3}>
        <Badge variant='subtle' colorScheme="purple" px={2} py={1}>BETA - NOT REAL DATA</Badge>
      </Box>

      <Box bg="whiteAlpha.100" mt={6} borderRadius={6} p={4}>
        <Flex
          flexWrap="wrap"
          minH="60px"
          height="100%"
          width="100%"
          position="relative"
          justifyContent="center"
          gap={4}
          pt={8}
        >

          <StatsCardBox title="Telegram" icon={FaTelegramPlane}>
            <StatElement label="Canal Global" followers={1156} />
            <StatElement label="Canal Spain" followers={1671} />
            <StatElement label="Announces" followers={1113} />
          </StatsCardBox>

          <StatsCardBox title="Twitter" icon={FaTwitter}>
            <StatElement label="@FoxtrotCommand" followers={4511} />
          </StatsCardBox>

          <StatsCardBox title="Instagram" icon={FaInstagram}>
            <StatElement label="@FoxtrotCommand" followers={1370} />
          </StatsCardBox>

          <StatsCardBox title="Discord" icon={FaDiscord}>
            <StatElement label="Canal Principal" followers={1995} />
          </StatsCardBox>

          <StatsCardBox title="Youtube" icon={FaYoutube}>
            <StatElement label="Canal Principal" followers={21} />
          </StatsCardBox>

        </Flex>
      </Box>

    </Box>

  )
}

const Tools = () => {
  return (
    <Flex gap={5} flexWrap="wrap" justifyContent="space-between">
      <CardBoxElement identifier="Generadores" title="Cartas" link="/generators/card" color="purple" text="Beta" />
      <CardBoxElement identifier="Generadores" title="Post redes sociales" color="red" text="WIP" />
      <CardBoxElement identifier="Generadores" title="Partnership" color="red" text="WIP" />
      <CardBoxElement identifier="Generadores" title="Documento NDA" color="red" text="WIP" />
    </Flex>
  )
}

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
const Home = () => {

  return (
    <Container maxW='5xl' minHeight="777px">

      <Box as="section">

        <Section title="Nuestra Comunidad">
          <Stats />
        </Section>

        <Section title="Herramientas">
          <Tools />
        </Section>

        <Section title="Manipulación de datos">
          <CardBoxElement identifier="DDBB" title="Datos de cartas" color="red" text="WIP" />
        </Section>

      </Box>

    </Container >
  );
};

export default Home;
