import { useRef, useState } from "react";

import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { DropdownMenu } from "common/components";
import useImageHandler from "common/hooks/useImageHandler";
import { captureHtmlAndSavePng } from "common/helper";
import Draggable, { DraggableProps } from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegSquarePlus } from "react-icons/fa6";

interface ExtraBounds {
  bounds: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
}

type DraggablePropsExpanded = (DraggableProps & ExtraBounds) | any;

const DraggableBox = (props: DraggablePropsExpanded) => {
  const { children, ...restProps } = props;

  return <Draggable {...restProps}>{children}</Draggable>;
};

type UploadLogoButtonType = {
  selectedImage: boolean;
  imageHandler: any;
};

const UploadLogoButton = ({
  selectedImage,
  imageHandler,
}: UploadLogoButtonType) => {
  return (
    <Box
      as="label"
      className="custom-file-upload"
      htmlFor="image-importer"
      h="auto"
      w="auto"
    >
      <Flex>
        <Box
          bg="whiteAlpha.200"
          px={2}
          py={2}
          borderRadius="6px 0px 0px 6px"
          _hover={{
            bg: "whiteAlpha.300",
          }}
          whiteSpace="nowrap"
        >
          <FaRegSquarePlus /> Subir Logo
          <Input id="image-importer" type="file" onChange={imageHandler} />
        </Box>

        <Button
          h="auto"
          borderRadius="0px 6px 6px 0px"
          onClick={() => imageHandler(null)}
          disabled={!selectedImage}
        >
          <AiOutlineClose />
        </Button>
      </Flex>
    </Box>
  );
};

const TwitterSpace = () => {
  const { selectedImage, imageHandler } = useImageHandler();
  const [showBox, setShowBox] = useState(false);
  const [time, setTime] = useState("00:00");
  const [month, setMonth] = useState("Septiembre");
  const [day, setDay] = useState("20");
  const nodeRef = useRef(null);

  const handleDateSelection = (e) => {
    if (!e.target.value) return;

    const date = new Date(e.target.value);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    const time = date.toLocaleString("default", {
      hour: "numeric",
      minute: "2-digit",
    });

    setTime(time);
    setMonth(month);
    setDay(day);
  };

  return (
    <Flex
      gap="4"
      mt="10px"
      width="100%"
      maxWidth="1280px"
      minH={{ lg: "777px", "2xl": "900px" }}
      mx="auto"
      direction={{ base: "column-reverse", md: "column" }}
      px={{ base: 4, md: 4 }}
      alignItems="center"
    >
      <Box
        w={{ base: "100%", md: "75%" }}
        mt="0"
        height="100%"
        bg="whiteAlpha.100"
        pt="65px"
        pb="20px"
        px="20px"
        borderRadius={8}
        position="relative"
      >
        <DropdownMenu setActive={setShowBox} isActive={showBox} />

        <Flex direction="column" gap={2}>
          <Flex gap={2} direction="row">
            <UploadLogoButton
              selectedImage={selectedImage}
              imageHandler={imageHandler}
            />

            <Input
              type="datetime-local"
              size="md"
              onChange={handleDateSelection}
            />
          </Flex>

          <Button
            w="100%"
            h="40px"
            onClick={() =>
              captureHtmlAndSavePng({
                id: "TwitterSpace_identifier",
                name: "twitter_space",
              })
            }
          >
            Guardar Twitter Space
          </Button>
        </Flex>
      </Box>
      <Box
        w={{ base: "100%", md: "75%" }}
        mt="0"
        h="100%"
        maxH="600px"
        bg="whiteAlpha.100"
        p="20px"
        borderRadius={8}
      >
        <Box w="100%" mx="auto" transition="all .8s ease-in-out">
          <svg viewBox="0 0 1024 512" id="TwitterSpace_identifier">
            <g>
              <image
                type="MSBitmapLayer"
                x="0"
                y="0"
                width="1024"
                height="512"
                href="/images/generators/twitter_space/template.png"
              />
              ;
            </g>

            <rect
              height="80"
              width="228"
              x="526"
              y="250"
              style={{
                fill: "rgba(255, 255, 255, 0.1)",
                stroke: "rgba(255, 255, 255, 0.6)",
                strokeWidth: "1",
                display: showBox ? "inline" : "none",
              }}
            />

            <DraggableBox
              nodeRef={nodeRef}
              bounds={{ top: 0, left: -10, right: 10, bottom: 0 }}
              grid={[10, 10]}
            >
              <g ref={nodeRef}>
                {!selectedImage ? (
                  <Box
                    cursor="move"
                    as="svg"
                    height="140"
                    width="300"
                    x="540"
                    y="255"
                  >
                    <rect
                      width="200"
                      height="70"
                      style={{
                        fill: "rgba(0, 0, 0, 0.3)",
                        stroke: "rgba(255, 255, 255, 0.6)",
                        strokeWidth: "1",
                      }}
                    ></rect>
                    <Box
                      as="text"
                      x="100"
                      y="50"
                      fontSize="50px"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Montserrat"
                      fontWeight="600"
                      userSelect="none"
                    >
                      ?
                    </Box>
                  </Box>
                ) : (
                  <Box
                    as="image"
                    cursor={"move"}
                    type="MSBitmapLayer"
                    x="540"
                    y="250"
                    width="240"
                    height="70"
                    href={selectedImage}
                    animation="ease-in-out"
                    transition="ease-in-out"
                  />
                )}
              </g>
            </DraggableBox>

            <text
              x="565"
              y="387"
              fontSize="16px"
              textAnchor="middle"
              fill="#d6dae3"
              stroke="black"
              strokeWidth="0px"
              letterSpacing="0px"
              fontFamily={"Montserrat"}
              fontWeight="700"
              style={{
                textTransform: "capitalize",
              }}
            >
              {month}
            </text>

            <text
              x="460"
              y="420"
              fontSize="80px"
              textAnchor="middle"
              fill="#d6dae3"
              stroke="black"
              strokeWidth="0px"
              letterSpacing="0px"
              fontFamily={"Montserrat"}
              fontWeight="700"
            >
              {day}
            </text>

            <text
              x="566"
              y="415"
              fontSize="15px"
              textAnchor="middle"
              fill="#d6dae3"
              stroke="black"
              strokeWidth="0px"
              letterSpacing="0px"
              fontFamily={"Montserrat"}
              fontWeight="700"
            >
              {time} UTC
            </text>
          </svg>
        </Box>
      </Box>
    </Flex>
  );
};

export default TwitterSpace;
