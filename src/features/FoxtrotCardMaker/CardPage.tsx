"use client";

import React, { useRef, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
import DropdownMenu from "common/components/DropdownMenu";
import {
  CardGeneratorForm,
  CardView,
} from "features/FoxtrotCardMaker/components";
import InstagramPostCardVariant from "features/FoxtrotCardMaker/components/InstagramPostCardVariant";
import InstagramStoriesCardVariant from "features/FoxtrotCardMaker/components/InstagramStoriesCardVariant";

const CardPage = () => {
  const [isFrameVisible, setFrameVisibility] = useState<boolean>(true);

  const cardViewRef = useRef(<CardView showFrame={isFrameVisible} />);

  return (
    <Flex
      gap={4}
      mt="10px"
      width="100%"
      maxWidth="1280px"
      minH="777px"
      mx="auto"
      alignItems="center"
      direction={{ base: "column", md: "column" }}
      px={{ base: 4, md: 4 }}
      mb={24}
    >
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        gap={4}
        justifyContent="center"
      >
        <CardGeneratorForm />
        <Box
          h="40%"
          w="auto"
          p="40px"
          bg="whiteAlpha.100"
          borderRadius={8}
          position="relative"
        >
          <DropdownMenu
            isActive={isFrameVisible}
            setActive={setFrameVisibility}
            title="Marco de la carta"
          />
          <CardView showFrame={isFrameVisible} />
        </Box>
      </Flex>

      <Flex flexDirection={{ base: "column", lg: "row" }} w="100%" gap={6}>
        <InstagramPostCardVariant card={cardViewRef} />
        <InstagramStoriesCardVariant card={cardViewRef} />
      </Flex>
    </Flex>
  );
};

export default React.memo(CardPage);
