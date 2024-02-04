import {
  Box,
  Image as ChakraImage,
  Flex,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { Notify } from "notiflix";
import { FaRegSquarePlus } from "react-icons/fa6";
import shallow from "zustand/shallow";

const ImageUpload = () => {
  const { cardImage, setImage } = useCardStore(
    (state) => ({
      cardImage: state.cardState.selectedImage,
      setImage: state.setImage,
    }),
    shallow,
  );

  const imageHandler = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      if (!event.target.files[0].type.match("image.*")) {
        return Notify.failure("Prueba con otro tipo de imagen");
      }
      const reader = new FileReader();
      reader.onload = function (event: ProgressEvent<FileReader>) {
        setImage(event?.target?.result);
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
            <Icon as={FaRegSquarePlus} my="auto" />
            <Text whiteSpace="nowrap">Subir imagen</Text>
          </Box>

          {cardImage ? (
            <ChakraImage
              src={cardImage}
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
