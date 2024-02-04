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

type StatsProps = {
  discordCounter?: number;
  telegramAnnouncesCounter?: number;
  telegramGlobalCounter?: number;
  telegramSpainCounter?: number;
};

const Stats = (props: StatsProps) => {

  const {
    discordCounter = 0,
    telegramAnnouncesCounter = 0,
    telegramGlobalCounter = 0,
    telegramSpainCounter = 0
  } = props;

  return (
    <Section title="Nuestra Comunidad">
      <Box position="relative">
        <Box
          bg="whiteAlpha.100"
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
            pt={2}
          >
            <StatsCardBox title="Telegram" icon={FaTelegramPlane}>
              <StatElement label="Canal Global" followers={telegramGlobalCounter} />
              <StatElement label="Canal Spain" followers={telegramSpainCounter} />
              <StatElement label="Announces" followers={telegramAnnouncesCounter} />
            </StatsCardBox>

            <StatsCardBox title="Twitter" icon={FaTwitter}>
              <StatElement label="@FoxtrotCommand" followers={0} />
            </StatsCardBox>

            <StatsCardBox title="Instagram" icon={FaInstagram}>
              <StatElement label="@FoxtrotCommand" followers={0} />
            </StatsCardBox>

            <StatsCardBox title="Discord" icon={FaDiscord}>
              <StatElement label="Presencia total" followers={discordCounter} />
            </StatsCardBox>

            <StatsCardBox title="Youtube" icon={FaYoutube}>
              <StatElement label="Canal Principal" followers={0} />
            </StatsCardBox>
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

export default Stats;
