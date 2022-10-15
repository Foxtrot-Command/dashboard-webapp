import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

type Props = {
  label: string;
  followers: number;
}

const StatElement = ({ label, followers }: Props) => {
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
