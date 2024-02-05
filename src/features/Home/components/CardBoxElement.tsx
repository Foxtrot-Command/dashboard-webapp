"use client";

import Link from "next/link";

import { Badge, Box, Text, } from "@chakra-ui/react";
import { tagReleaseColor } from "../constants/tools";
import CardIdentifier from "./CardIdentifier";

type CardBoxElementProps = {
  identifier: string;
  title: string;
  link?: string | URL;
  text: string;
  color?: string;
  allowedRolesList?: string | Array<string>;
};

const CardBoxElement = (props: CardBoxElementProps) => {

  const {
    identifier,
    title,
    link = "/",
    text = "",
    color,
    allowedRolesList = "",
  } = props;

  return (
    <Link href={link}>
      <Box
        w="230px"
        h="110px"
        bg="whiteAlpha.100"
        borderRadius={6}
        py={8}
        px={4}
        position="relative"
        transition="all .2s ease-in-out"
        _hover={{
          transform: "translateY(-5px)",
          transition: "all .2s ease-in-out",
          cursor: "pointer",
          bg: "whiteAlpha.200",
        }}
        boxShadow="brand.shadow.md"
      >
        <Text fontWeight="bold">{title}</Text>

        <CardIdentifier identifier={identifier} allowedRolesList={allowedRolesList}/>

        <Box position="absolute" right={4} bottom={2}>
          <Badge variant="subtle" colorScheme={color ?? tagReleaseColor[text]}>
            {text}
          </Badge>
        </Box>
      </Box>
    </Link>
  );
};

export default CardBoxElement;
