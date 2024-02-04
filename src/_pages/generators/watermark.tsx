import React, { useState } from "react";

import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import useImageHandler from "common/hooks/useImageHandler";
import { captureHtmlAndSavePng } from "common/helper";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegSquarePlus } from "react-icons/fa6";

const WatermarkComponent: React.FC = () => {
  const { selectedImage, fileName, imageHandler } = useImageHandler();

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
        height="100%"
        bg="whiteAlpha.100"
        p="20px"
        borderRadius={8}
      >
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
                  bg: "whiteAlpha.300",
                }}
              >
                <FaRegSquarePlus /> Subir imagen
                <Input
                  id="image-importer"
                  key={selectedImage ? fileName : "input"}
                  type="file"
                  onChange={(e: any) => {
                    imageHandler(e);
                  }}
                ></Input>
              </Box>

              <Button
                borderRadius="0px 6px 6px 0px"
                h="auto"
                onClick={() => imageHandler(null)}
                disabled={!selectedImage}
              >
                <AiOutlineClose />
              </Button>
            </Flex>
          </Box>

          <Button
            ml={4}
            h="auto"
            onClick={() => {
              if (!fileName) return;
              captureHtmlAndSavePng({
                id: "watermark_image",
                name: fileName,
                quality: 5,
              });
            }}
          >
            Guardar imagen
          </Button>
        </Flex>
        <Box
          mt="5"
          height="500px"
          width="100%"
          bg="whiteAlpha.100"
          borderRadius={8}
          display="flex"
          gap={3}
          p={5}
          backgroundImage="/images/generators/partnership/partnership_background.png"
        >
          <Box mx="auto" height="100%" width="auto">
            <svg
              style={{
                width: "100%",
                height: "100%",
                userSelect: "none",
                transition: "all .5s ease-in-out",
              }}
              id="watermark_image"
              viewBox="60 0 649 1120"
            >
              {selectedImage ? (
                <>
                  <g>
                    <image
                      type="MSBitmapLayer"
                      x={0}
                      y={0}
                      width={769}
                      height={1120}
                      href={selectedImage}
                    />
                  </g>
                  <g>
                    <image
                      type="MSBitmapLayer"
                      alignmentBaseline="middle"
                      x={490}
                      y={520}
                      width={200}
                      height={1100}
                      href="/images/fxd_logo.svg"
                      opacity={0.7}
                    />
                  </g>
                </>
              ) : null}
            </svg>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default WatermarkComponent;
