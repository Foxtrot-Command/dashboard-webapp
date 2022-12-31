import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";

import {
  DescriptionEditor,
  FactionSelection,
  ImageUpload,
  NameInput,
  QualitySelector,
  RaritySelector,
  TypeSelector,
  AttackInput,
  HealthInput,
  ManaInput
} from "features/FoxtrotCardMaker/components/Form";
import ResetForm from "./Form/ResetForm";

const CardGeneratorForm = () => {
  return (
    <Flex direction="column" w={{ base: "100%", md: "auto" }} position="relative">
      <ResetForm/>
      <Box
        mt="0"
        height="100%"
        w="100%"
        bg="whiteAlpha.100"
        p="20px"
        borderRadius={8}
      >

        <Flex flexDirection="column" justify="space-between" h="100%">
          <Box>
            <Flex direction={{ base: "column", lg: "row" }} gap={2}>
              <NameInput />
              <Flex gap={3}>
                <ManaInput />
                <AttackInput />
                <HealthInput />
              </Flex>
            </Flex>

            <Flex
              mt={4}
              gap={{ base: 4, md: 0 }}
              direction={{ base: "column", lg: "row" }}
            >
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

            <Flex
              gap={4}
              mt="10px"
              direction="column"
              w="100%"
              position="relative"
            >
              <FactionSelection />
              <RaritySelector />
            </Flex>
          </Box>
          <Flex justify="flex-end" flexDirection="column">
            <Divider mt="14px" />
            <QualitySelector key="main_card_selector" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(CardGeneratorForm);
