import { Box, Divider, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {
  NameInput,
  ImageUpload,
  TypeSelector,
  QualitySelector,
  CardView,
  DescriptionEditor,
  FactionSelection,
  RaritySelector,
  StatsInput
} from '.';

const CardGeneratorForm = () => {

  return (
    <Flex direction="column" w={{ base: "100%", md: "auto" }}>
      <Box mt="0" height="auto" w="100%" bg="whiteAlpha.100" p="20px" borderRadius={8}>
        <Flex direction={{ base: "column", lg: "row" }} gap={2}>
          <NameInput />
          <StatsInput />
        </Flex>

        <Flex mt={4} gap={{ base: 4, md: 0 }} direction={{ base: "column", lg: "row" }}>

          <Box w={{ base: "100%", lg: "50%" }}>
            <DescriptionEditor />
          </Box>

          <Flex
            direction={{ base: "row", lg: "column" }}
            gap={2}
            w={{ base: "100%", lg: "50%" }}
            pl={{ base: 0, lg: 6 }}
          >
            <ImageUpload />
            <TypeSelector />
          </Flex>

        </Flex>

        <Flex gap={4} mt="10px" direction="column" w="100%" position="relative">
          <FactionSelection />
          <RaritySelector />
        </Flex>
        <Divider mt="14px" />

        <QualitySelector key='main_card_selector' />
      </Box>
    </Flex>
  )
}

export default CardGeneratorForm
