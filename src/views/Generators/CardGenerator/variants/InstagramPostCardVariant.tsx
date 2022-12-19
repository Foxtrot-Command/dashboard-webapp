import { LegacyRef, useContext, useRef, useState } from "react";

import { Box, Button, Flex, Icon, ImageProps, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import SliderOpacity from "components/SliderOpacity";
import { hexToRgb } from "utils";

import { rarityArr } from "../Utils/RawData";
import CardView from "../components/CardView";
import DownloadButton from "../components/DownloadButton";
import CardContext from "../context/CardContext";
import Draggable from "react-draggable";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const buttonArguments = {
  "+": 10,
  "++": 50,
  "+++": 100,
  "-": -10,
  "--": -50,
  "---": -100
}

const InstagramPostCardVariant = () => {
  const { state, selectedImage } = useContext(CardContext);

  const [sliderValue, setSliderValue] = useState(60);

  const rarityColor = () => {
    const { color = "#000" } = rarityArr.filter(
      (value) => value.name === state.rarity
    )[0];
    return hexToRgb(color).join(", ");
  };

  // Todo: search type for this useRef
  const [imageSize, setImageSize] = useState<Array<number>>([540, 540]);
  const [showLogo, setShowLogo] = useState<boolean>(true);

  const HandleResize = (type: "+" | "++" | "+++" | "-" | "--" | "--") => {
    const [width, height] = imageSize;
    setImageSize([width + buttonArguments[type], height + buttonArguments[type]]);
  }

  const ToggleShowLogo = () => {
    setShowLogo(prevState => !prevState)
  }

  return (
    <Tabs variant='enclosed' w="100%">
      <TabList>
        <Tab color="whiteAlpha.900" _selected={{
          color: "whiteAlpha.900",
          border: "1px solid"
          }}>Normal</Tab>
        <Tab color="whiteAlpha.900" _selected={{
          color: "whiteAlpha.900",
          border: "1px solid"
          }}>Illustration</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
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
            <Box
              borderRadius={8}
              bg="whiteAlpha.100"
              alignItems="center"
              textAlign="center"
              p={4}
            >
              <Text>Instagram Post 1080x1080</Text>
            </Box>

            <Flex flexDirection="row" justifyContent="space-around">
              <SliderOpacity
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
              />
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
                  filter={`drop-shadow(0px 5px 27px rgba(${rarityColor()}, ${sliderValue / 100
                    }))`}
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
                id: "instagram_post",
                name: `${state.cardName}_post`,
                quality: 3,
              }}
              key="instagram_post"
            />
          </Flex>
        </TabPanel>
        <TabPanel>
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
            <Box
              borderRadius={8}
              bg="whiteAlpha.100"
              alignItems="center"
              textAlign="center"
              p={4}
            >
              <Text>Instagram Illustration 1080x1080</Text>
            </Box>

            <Flex flexDirection="row" justifyContent="space-around" h="100%" gap={2}>

              <Box
                backgroundImage="/images/generators/cards/backgrounds/1080x1080.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                w="540px"
                h="540px"
                p={6}
                position="relative"
                id="instagram_post_illustration"
                overflow="hidden"
              >
                <Draggable>
                  <Box
                    my="auto"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    h={imageSize[0]}
                    w={imageSize[1]}

                    as="img"
                    src={selectedImage}
                    position="absolute"
                    objectFit="cover"
                    cursor="move"
                  />
                </Draggable>

                <Box
                  as="img"
                  src="/images/fxd_logo.svg"
                  w="100px"
                  position="absolute"
                  mx="auto"
                  bottom={3}
                  right={4}
                  zIndex={2}
                  hidden={!showLogo}
                />

              </Box>
              <Flex flexDirection="column" gap={2} justify="space-between">

                <Flex flexDirection="column" gap={2}>
                  {Object.keys(buttonArguments).map((key, index: number) => {
                    return (
                      <Button onClick={() => HandleResize(key as any)}>{buttonArguments[key]}</Button>
                    )
                  })}
                </Flex>
                <Button onClick={() => ToggleShowLogo()} position="relative">
                  <Icon position="absolute" top={0.5} right={0.5} as={showLogo ? FaEye : FaEyeSlash}/>
                  Logo
                </Button>
              </Flex>
            </Flex>

            <DownloadButton
              w="100%"
              saveConfig={{
                id: "instagram_post_illustration",
                name: `${state.cardName}_post_illustration`,
                quality: 3,
              }}
              key="instagram_post_illustration"
            />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InstagramPostCardVariant;
