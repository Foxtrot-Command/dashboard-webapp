import React from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';

interface ImageUploaderProps {
  selectedImage: string | null;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader = (props: ImageUploaderProps) => {

  const { selectedImage, onImageChange } = props;

  return (
    <Box as="label" htmlFor="image-importer" h="auto">
      <Flex>
        <Box
          bg="whiteAlpha.200"
          px={2}
          py={3}
          borderRadius="6px 0px 0px 6px"
          _hover={{ bg: "whiteAlpha.300" }}
        >
          <FaRegSquarePlus /> Subir Logo del partner
          <Input id="image-importer" type="file" onChange={onImageChange} hidden />
        </Box>
        <Button
          borderRadius="0px 6px 6px 0px"
          h="auto"
          onClick={() => onImageChange(null as any)} // Type casting to any to handle null value
          disabled={!selectedImage}
        >
          <AiOutlineClose />
        </Button>
      </Flex>
    </Box>
  );
};

export default ImageUploader;
