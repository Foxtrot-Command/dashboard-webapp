import React, { Dispatch, SetStateAction } from "react";

import {
  Box,
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

type Props = {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  title?: string;
};

const DropdownMenu = ({
  setActive,
  isActive,
  title = "Habilitar o Deshabilitar",
}: Props) => {
  return (
    <Box
      position="absolute"
      top={0} right={0}
    >
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            borderTopLeftRadius={0}
            borderRightRadius={8}
            borderBottomLeftRadius={8}
            borderBottomRightRadius={0}
            aria-label="Items"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent
          w="fit-content"
          _focus={{ boxShadow: "none" }}
          backgroundColor="neutrals.900"
          borderColor="neutrals.800"
        >
          <PopoverArrow
            backgroundColor="neutrals.900"
            borderColor="neutrals.800"
          />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={isActive ? <FaToggleOn /> : <FaToggleOff />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
                onClick={() => setActive((prev: any) => !prev)}
              >
                {title}
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default DropdownMenu;
