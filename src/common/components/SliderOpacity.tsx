"use client";

import { useState } from "react";

import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { MdOpacity } from "react-icons/md";

type Props = {
  sliderValue: number;
  defaultValue?: number;
  setSliderValue: (val: number) => void;
};

const SliderOpacity = ({
  sliderValue = 60,
  defaultValue = 60,
  setSliderValue,
  ...props
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Box pt={6} pb={2} {...props}>
      <Slider
        orientation="vertical"
        defaultValue={defaultValue}
        min={30}
        max={70}
        onChange={setSliderValue}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack bg="neutrals.500">
          <SliderFilledTrack bg="neutrals.200" />
        </SliderTrack>

        <Tooltip
          hasArrow
          bg="neutrals.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue / 100} ${
            sliderValue === defaultValue ? "Recomendado" : ""
          }`}
        >
          <SliderThumb boxSize={6}>
            <Box color="GrayText" as={MdOpacity} />
          </SliderThumb>
        </Tooltip>
      </Slider>
    </Box>
  );
};

export default SliderOpacity;
