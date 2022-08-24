/* eslint-disable @next/next/no-img-element */
import {
  ArrowDownwardOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MenuOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Fab,
  Toolbar,
  Stack,
  Typography,
  Chip,
  Button,
  MobileStepper,
  Paper,
  Slider,
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/assets/nikka_logo.png";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClassNames } from "@emotion/react";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function Extra(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box className="h-[100vh] relative bg-[#ffffff]" id="features">
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={15}
        className="pt-[50px]"
      >
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <Typography variant="h3" className="font-bold">
            CITY LIVING WITH ALL THE EXTRAS
          </Typography>
          <Typography variant="body1">
            Inspired by Urban lifestyle trends, NIKKA offers modern city
            dwellers the perfect home to discover new ways to enhance their way
            of life.
          </Typography>
        </Stack>
        <Splide
          className="pb-[50px]"
          aria-label="My Favorite Images"
          data-splide='{"rewind":"true","perPage":3}'
        >
          <SplideSlide className="flex flex-col justify-center items-center">
            <img
              src="/assets/residential.png"
              alt="Image 1"
              width="80%"
              className="mr-[10px]"
            />
            <Typography variant="body1">Residential Title</Typography>
          </SplideSlide>
          <SplideSlide className="flex flex-col justify-center items-center">
            <img src="/assets/floorplan-2.png" alt="Image 2" width="80%" />
            <Typography variant="body1">
              965 sq. ft. to 1,264 sq. ft.
            </Typography>
          </SplideSlide>
          <SplideSlide className="flex flex-col justify-center items-center">
            <img src="/assets/room-2.png" alt="Image 2" width="80%" />
            <Typography variant="body1">4 - 5 Rooms, 3 Bathroom</Typography>
          </SplideSlide>
          <SplideSlide className="flex flex-col justify-center items-center">
            <img src="/assets/facilities.png" alt="Image 2" width="80%" />
            <Typography variant="body1">
              Over 50 Lifestyle Facilities
            </Typography>
          </SplideSlide>
          <SplideSlide className="flex flex-col justify-center items-center">
            <img src="/assets/lrt-station.png" alt="Image 2" width="80%" />
            <Typography variant="body1">
              50M LRT Station (Salak Selatan Station)
            </Typography>
          </SplideSlide>
          <SplideSlide className="flex flex-col justify-center items-center">
            <img src="/assets/dual-key-concept.png" alt="Image 2" width="80%" />
            <Typography variant="body1">Dual Key Concept</Typography>
          </SplideSlide>
        </Splide>
      </Stack>
    </Box>
  );
}
