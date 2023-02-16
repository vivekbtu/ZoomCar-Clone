import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CarAgeSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <Box p="2">
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} borderRadius="-0.5rem" boxShadow="lg">
          <Box fontSize="13px">{sliderValue}</Box>
        </SliderThumb>
      </Slider>
    </Box>
  );
}
