'use client';

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useImageHandler from 'common/hooks/useImageHandler';
import ImageUploader from './components/ImageUploader';
import SavePartnershipButton from './components/SavePartnershipButton';
import DragBoxToggle from './components/DragBoxToggle';
import PartnershipSVG from './components/PartnershipSVG';

const PartnershipPage = () => {
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
      <Flex
        backgroundColor="alto.950"
        width={{ base: "100%", md: "75%" }}
        padding={3}
        borderRadius="base"
      >
        <ImageUploader selectedImage={selectedImage} onImageChange={imageHandler} />
        <SavePartnershipButton />
        <DragBoxToggle isChecked={showBox} onChange={() => setShowBox(!showBox)} />
      </Flex>
      <PartnershipSVG showBox={showBox} selectedImage={selectedImage} />
    </Flex>
  );
};

export default PartnershipPage;
