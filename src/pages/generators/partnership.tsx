import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Input, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import Draggable, { DraggableProps } from 'react-draggable';
import { onCapture } from 'utils';
import { AiOutlineClose } from 'react-icons/ai';
import useImageHandler from 'hooks/useImageHandler';

interface ExtraBounds {
  bounds: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }
}

type DraggablePropsExpanded = DraggableProps & ExtraBounds | any; 

const DraggableBox = (props: DraggablePropsExpanded) => {

  const { children, ...restProps } = props;

  return (
    <Draggable {...restProps}>
      {children}
    </Draggable>
  );
}

const partnership = () => {

  const [showBox, setShowBox] = useState(false);

  const { selectedImage, imageHandler } = useImageHandler();

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
      <Box w={{ base: "100%", md: "75%" }} mt="0" height="100%" bg="whiteAlpha.100" p="20px" borderRadius={8}>
        <Flex gap={2}>

          <Box
            as="label"
            className="custom-file-upload"
            htmlFor="image-importer"
            h="auto"
          >
            <Flex>
              <Box
                bg="whiteAlpha.200"
                px={2}
                py={3}
                borderRadius="6px 0px 0px 6px"
                _hover={{
                  bg: "whiteAlpha.300"
                }}
              >
                <PlusSquareIcon /> Subir Logo del partner

                <Input id="image-importer" type="file" onChange={(e: any) => { imageHandler(e); }}>
                </Input>
              </Box>

              <Button borderRadius="0px 6px 6px 0px" h="auto" onClick={() => imageHandler(null)} disabled={!selectedImage}>
                <AiOutlineClose />
              </Button>
            </Flex>
          </Box>

          <Button ml={4} h="auto" onClick={() => onCapture({id: 'partnership_identifier', name: "partner"})}>
            Guardar partnership
          </Button>
        </Flex>

        <Box mt={6}>
          <Box ml={4} h="auto">
            Mostrar DragBox <Switch size='lg' onChange={() => setShowBox(!showBox)} />
          </Box>
        </Box>


      </Box>
      <Box
        w={{ base: "100%", md: "75%" }}
        mt="0"
        h="100%" maxH="500px" bg="whiteAlpha.100" p="20px" borderRadius={8}>
        <Box w="100%" mx="auto" transition="all .2s ease-in-out">
          <svg viewBox="0 0 1024 512" id="partnership_identifier">
            <g>

              <image
                type="MSBitmapLayer"
                x="0"
                y="0"
                width="1024"
                height="512"
                href="/images/generators/partnership/partnership_background.png"
              />;
            </g>
            <g>
              <image
                type="MSBitmapLayer"
                x="145"
                y="130"
                width="300"
                height="200"
                href="/images/fxd_logo.svg"
              />;
            </g>

            <svg width="2" height="115" x="490" y="180">
              <rect width="2" height="115" style={{
                fill: "rgba(255, 255, 255, 1)"
              }} />
            </svg>

            <rect width="400" height="270" x="500" y="100" style={{
              fill: "rgba(255, 255, 255, 0.1)",
              stroke: "rgba(255, 255, 255, 0.6)",
              strokeWidth: "1",
              display: showBox ? 'inline' : 'none'
            }} />

            <DraggableBox bounds={{ top: -70, left: -50, right: 50, bottom: 60 }} grid={[10, 10]}>
              <g>
                {!selectedImage ?
                  <svg height="140" width="500" x="550" y="170">

                    <rect width="300" height="200" style={{
                      fill: "rgba(0, 0, 0, 0.3)",
                      stroke: "rgba(255, 255, 255, 0.6)",
                      strokeWidth: "1"
                    }}>
                    </rect>
                    <text
                      x="150"
                      y="90"
                      fontSize="50px"
                      textAnchor="middle"
                      fill="white"
                      fontFamily={"Montserrat"}
                      fontWeight="600"
                    >
                      ?
                    </text>
                  </svg> :
                  <image
                    type="MSBitmapLayer"
                    x="550"
                    y="130"
                    width="300"
                    height="200"
                    href={selectedImage}
                  />
                }

              </g>
            </DraggableBox>


            <text
              x="520"
              y="470"
              fontSize="50px"
              textAnchor="middle"
              fill="#d6dae3"
              stroke="black"
              strokeWidth="0px"
              letterSpacing="0px"
              fontFamily={"Inversionz Unboxed"}
              fontWeight="400"
            >
              Official Partnership
            </text>
          </svg>
        </Box>
      </Box>
    </Flex>
  )
}

export default partnership