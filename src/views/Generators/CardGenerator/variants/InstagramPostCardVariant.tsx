import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

import CardContext from '../context/CardContext'
import CardView from '../components/CardView';
import DownloadButton from '../components/DownloadButton';
import SliderOpacity from 'Components/SliderOpacity';
import { hexToRgb } from 'utils'xt from '../context/CardContext'
import { rarityArr } from '../Utils/RawData'

const InstagramPostCardVariant = () => {
  const {
    state,
    selectedImage
  } = useContext(CardContext)

  const [sliderValue, setSliderValue] = useState(60)

  const rarityColor = () => {
    const { color = '#000' } = rarityArr.filter((value) => value.name === state.rarity)[0]
    return hexToRgb(color).join(', ');
  }

  return (
    <Flex
      flexDirection="column"
      gap={6}
      h="100%"
      w="100%"
      bg="whiteAlpha.100"
      px="14px"
      py="20px"
      borderRadius="lg"
    >
      <Box borderRadius={8} bg="whiteAlpha.100" alignItems="center" textAlign="center" p={4}>
        <Text>Instagram Post 1080x1080</Text>
      </Box>

      <Flex flexDirection="row" justifyContent="space-around">

        <SliderOpacity sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <Box
          backgroundImage="/images/generators/cards/backgrounds/1080x1080.png"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          w="540px"
          h="540px"
          minW="540"
          minH="540"
          maxH="540"
          maxW="540"
          position="relative"
          id="instagram_post"
          overflow="hidden"
        >
          <Box
            my="auto"
            top={0}
            bottom={0}
            w="100%"
            as="img"
            src={selectedImage}
            position="absolute"
            opacity={0.07}
            objectFit="contain"
          />

          {/* //TODO ¿ADD BLOOBS? <Box
          position="absolute"
          w="150px"
          h="200px"
          borderRadius="full"
          bg={`rgba(${rarityColor()}, ${sliderValue / 100 - 0.10})`}
          filter="blur(80px)"
          bottom={-20}
          left={-10}
          transform="rotate(-45deg)"
          transition="all .5s ease-in-out"
          >
          </Box> */}

          <Box
            position="relative"
            w="auto"
            h="100%"
            mx="auto"
            p="40px"
            filter={`drop-shadow(0px 5px 27px rgba(${rarityColor()}, ${sliderValue / 100}))`}
            transition="all .5s ease-in-out"
            zIndex={2}
          >
            <CardView />
          </Box>

        </Box>
      </Flex>

      <DownloadButton
        w="100%"
        saveConfig={{
          id: 'instagram_post',
          name: `${state.cardName}_post`,
          quality: 3
        }} key='instagram_post'
      />

    </Flex>
  )
}

export default InstagramPostCardVariant
