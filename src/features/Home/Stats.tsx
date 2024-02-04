"use client";

import { useEffect, useState } from "react";

import { Badge, Box, Flex } from "@chakra-ui/react";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Section, StatElement, StatsCardBox } from "./components";

const Stats = () => {
  const [discordCounter, setDiscordCounter] = useState(0);
  const [twitterCounter, setTwitterCounter] = useState(0);

  useEffect(() => {
    fetch("https://discordapp.com/api/guilds/893919170532634644/widget.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDiscordCounter(response.presence_count);
      });
  }, []);

  return (
    <Section title="Nuestra Comunidad">
      <Box position="relative">
        <Box position="absolute" right={4} top={3}>
          <Badge variant="subtle" colorScheme="purple" px={2} py={1}>
            BETA - NOT REAL DATA
          </Badge>
        </Box>

        <Box
          bg="whiteAlpha.100"
          mt={6}
          borderRadius={6}
          p={4}
          boxShadow="brand.shadow.md"
        >
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
              <StatElement label="@FoxtrotCommand" followers={twitterCounter} />
            </StatsCardBox>

            <StatsCardBox title="Instagram" icon={FaInstagram}>
              <StatElement label="@FoxtrotCommand" followers={1370} />
            </StatsCardBox>

            <StatsCardBox title="Discord" icon={FaDiscord}>
              <StatElement label="Presencia total" followers={discordCounter} />
            </StatsCardBox>

            <StatsCardBox title="Youtube" icon={FaYoutube}>
              <StatElement label="Canal Principal" followers={21} />
            </StatsCardBox>
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

export default Stats;
