import { Text, Box, Flex, Badge } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";

const StatElement = ({ label, followers }) => {
  return (
    <Flex gap={2}>
      <Badge my="auto" py={1} px={2} borderRadius={4} w="60px">
        <Flex gap={1} justifyContent="center">
          <Box as={FaUser} mt="2px" />
          <Text>{followers}</Text>
        </Flex>
      </Badge>

      <Text>{label}</Text>
    </Flex>
  );
};

export default StatElement;
