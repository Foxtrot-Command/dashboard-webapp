"use client";

import { useEffect, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import SliderOpacity from "common/components/SliderOpacity";
import { DownloadButton } from "features/FoxtrotCardMaker/components";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

import { RARITY_RGBA_COLORS } from "../constants/cards";

const InstagramCardVariant = ({
  card,
}: {
  card: React.MutableRefObject<JSX.Element>;
}) => {
  const [sliderValue, setSliderValue] = useState(35);
  const [rarityRGBA, setRarityRGBA] = useState([255, 255, 255]);

  const { cardName, selectedImage, cardRarity } = useCardStore(
    (state) => ({
      cardName: state.cardState.name,
      cardRarity: state.cardState.rarity,
      selectedImage: state.cardState.selectedImage,
    }),
    shallow,
  );

  useEffect(() => {
    if (cardRarity) {
      setRarityRGBA(RARITY_RGBA_COLORS[cardRarity].join(","));
    }
  }, [cardRarity]);

  return (
    <Flex
      flexDirection="column"
      gap={6}
      h="auto"
      w="100%"
      bg="whiteAlpha.100"
      px="14px"
      py="20px"
      borderRadius="lg"
    >
      <Box
        borderRadius={8}
        bg="whiteAlpha.100"
        alignItems="center"
        textAlign="center"
        p={4}
      >
        <Text>Instagram Stories 1920x1080</Text>
      </Box>
      <Flex flexDirection="row">
        <SliderOpacity
          sliderValue={sliderValue}
          defaultValue={35}
          setSliderValue={setSliderValue}
        />
        <Box
          h="640px"
          w="360px"
          minW="360px"
          minH="640px"
          position="relative"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          userSelect="none"
        >
          <Box
            id="instagram_stories"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            position="absolute"
            h="100%"
            w="auto"
            mx="auto"
            justifyContent="center"
            alignItems="center"
            left={0}
            right={0}
          >
            <Box
              as="img"
              src="/images/generators/cards/backgrounds/1920x1080.png"
              h="100%"
              w="auto"
              justifyContent="center"
              alignItems="center"
              zIndex={1}
              mx="auto"
            />

            <Box
              as="img"
              src={selectedImage}
              position="absolute"
              objectFit="cover"
              h="100%"
              w="auto"
              mx="auto"
              left={0}
              right={0}
              top={0}
              bottom={0}
              opacity={0.08}
              filter="blur(0.8px)"
              zIndex={2}
            />
            <Box
              as="img"
              src="/images/fxd_logo.svg"
              w="140px"
              position="absolute"
              mx="auto"
              bottom={16}
              left={3}
              right={0}
              zIndex={2}
            />

            <Box
              position="absolute"
              h="100%"
              w="100%"
              mx="auto"
              top={-14}
              py="95px"
              filter={`drop-shadow(0px 5px 15px rgba(${rarityRGBA}, ${sliderValue / 100}))`}
              transition="all .5s ease-in-out"
              zIndex={2}
            >
              {card.current}
            </Box>
          </Box>
        </Box>
      </Flex>

      <DownloadButton
        w="100%"
        saveConfig={{
          id: "instagram_stories",
          name: `${cardName}_storie`,
          quality: 3,
        }}
        key="instagram_stories"
      />
    </Flex>
  );
};

export default InstagramCardVariant;
