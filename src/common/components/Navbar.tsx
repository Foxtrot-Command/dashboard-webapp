"use client";

import Link from "next/link";

import {
  Avatar,
  AvatarBadge,
  Box,
  Link as ChakraLink,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAngleDown, FaAngleRight, FaBars, FaGears } from "react-icons/fa6";
import { logout } from "common/actions/logout";
import { Session } from "next-auth";

type NavbarProps = {
  session: Session;
}

export default function Navbar(props: NavbarProps) {

  const { isOpen, onToggle } = useDisclosure();
  const { session } = props;

  return (
    <Box>
      <Flex
        bg="neutrals.1000"
        color="white"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={2}
        borderStyle={"solid"}
        borderColor="neutrals.900"
        dropShadow="lg"
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={FaGears} w={3} h={3} />
              ) : (
                <Icon as={FaBars} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color="white"
          >
            <Link href="/">
              <Image style={{ width: "128px" }} src="/images/fxd_logo.svg" />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Menu>
            <MenuButton p="0px">
              <Avatar
                _hover={{ cursor: 'pointer' }}
                color="white"
                name={session.account.user.alias}
                size="sm"
                w="40px"
                h="40px"
              />
            </MenuButton>
            <MenuList boxShadow="14px 17px 40px 4px rgba(112, 144, 176, 0.18)" p="0px" mt="10px" borderRadius="md" bg="white" border="none">
              <Flex w="100%" mb="0px">
                <Text
                  ps="20px"
                  pt="16px"
                  pb="10px"
                  w="100%"
                  borderBottom="1px solid"
                  borderColor="rgba(135, 140, 189, 0.3)"
                  fontSize="sm"
                  fontWeight="700"
                  color="black">
                  👋&nbsp; Hey, {session.account.user.alias}
                </Text>
              </Flex>
              <Flex flexDirection="column" p="10px" color="neutrals.1000">
                <MenuItem _hover={{ bg: 'none', color:"black" }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px" backgroundColor="transparent">
                  <Text fontSize="sm">Profile Settings</Text>
                </MenuItem>
                <MenuItem  _hover={{ bg: 'none', color:"black" }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px"  backgroundColor="transparent">
                  <Text fontSize="sm">Newsletter Settings</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'none', color:"red.200" }}
                  _focus={{ bg: 'none' }}
                  color="red.400"
                  borderRadius="8px"
                  px="14px"
                  backgroundColor="transparent"
                  onClick={() => logout()}
                >
                  <Text fontSize="sm">Log out</Text>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={ChakraLink}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color="dust.600"
                _hover={{
                  textDecoration: "none",
                  color: "dust.800",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg="neutrals.500"
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href = "", subLabel }: NavItem) => {
  return (
    <Box
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "neutrals.900" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box cursor="pointer">
          <Link href={href}>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "neutrals.700" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Link>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"neutrals.700"} w={5} h={5} as={FaAngleRight} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"neutrals.500"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={ChakraLink}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="neutrals.200">
          {label}
        </Text>
        {children && (
          <Icon
            as={FaAngleDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor="neutrals.700"
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <ChakraLink key={child.label} py={2} href={child.href}>
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  /* {
        label: 'Generadores',
        children: [
            {
                label: 'Cartas',
                subLabel: 'Generador de cartas con marcos',
                href: '/generators/card',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    }, */
];
