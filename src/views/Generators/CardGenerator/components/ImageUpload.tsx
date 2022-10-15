import React, { useContext, useState } from "react";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Image as ChakraImage, Flex, Input, Text } from "@chakra-ui/react";
import { Notify } from "notiflix";
import CardContext from "views/Generators/CardGenerator/context/CardContext";

const ImageUpload = () => {
  const { selectedImage, setSelectedImage } = useContext(CardContext);

  const imageHandler = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      if (!event.target.files[0].type.match("image.*")) {
        return Notify.failure("Prueba con otro tipo de imagen");
      }
      const reader = new FileReader();
      reader.onload = function (e: any) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Box
      as="label"
      className="custom-file-upload"
      htmlFor="image-importer"
      h="auto"
      w="100%"
    >
      <Box
        bg="whiteAlpha.200"
        px={2}
        py={1}
        borderRadius={6}
        _hover={{
          bg: "whiteAlpha.300",
        }}
      >
        <Flex
          direction="row"
          gap={6}
          flexWrap="nowrap"
          w="100%"
          justifyContent="space-between"
        >
          <Box as={Flex} gap={2} my="auto">
            <PlusSquareIcon my="auto" />
            <Text whiteSpace="nowrap">Subir imagen</Text>
          </Box>

          {selectedImage ? (
            <ChakraImage
              src={selectedImage}
              w="32px"
              h="32px"
              minW="32px"
              minH="32px"
              alt="base image"
              objectFit="cover"
              justifyContent="flex-end"
              borderRadius={6}
              my="auto"
            />
          ) : (
            <Box
              w="32px"
              h="32px"
              minW="32px"
              minH="32px"
              background="neutrals.500"
              borderRadius={6}
              position="relative"
            ></Box>
          )}
        </Flex>
      </Box>
      <Input
        id="image-importer"
        type="file"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          imageHandler(event);
        }}
      ></Input>
    </Box>
  );
};

export default ImageUpload;
