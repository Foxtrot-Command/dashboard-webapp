import { Metadata } from "next";

import { Box, Container } from "@chakra-ui/react";
import { Data, Stats, Tools } from "features/Home";
import { getSocialPresence } from "common/actions/social";

export const metadata: Metadata = {
  title: "Trading Card Game",
};

export default async function HomePage() {

  const presence = await getSocialPresence();

  return (
    <Container maxW="5xl" minHeight="777px">
      <Box as="section">
        <Stats
          discordCounter={presence.discord}
          telegramGlobalCounter={presence.telegram.global}
          telegramSpainCounter={presence.telegram.spain}
          telegramAnnouncesCounter={presence.telegram.announcements}
        />
        <Tools />
        <Data />
      </Box>
    </Container>
  );
}
