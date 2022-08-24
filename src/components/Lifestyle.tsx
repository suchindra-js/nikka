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
  Grid,
  MobileStepper,
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/assets/nikka_logo.png";
// @ts-ignore
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "/assets/slider1.jpg",
  },
  {
    imgPath: "/assets/slider2.jpg",
  },
  {
    imgPath: "/assets/slider3.jpg",
  },
  {
    imgPath: "/assets/slider4.jpg",
  },
  {
    imgPath: "/assets/slider5.jpg",
  },
  {
    imgPath: "/assets/slider6.png",
  },
];

export default function Lifestyle(): JSX.Element {
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
    <Grid
      id="lifestyle"
      container
      className="h-[100vh]"
      sx={{
        backgroundColor: "primary.main",
      }}
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={6}>
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
      <Grid item>
        <Stack>
          <Typography variant="h6">
            BE INSPIRED AND OPEN YOUR MIND TO A
          </Typography>
          <Typography variant="h6">BRAND NEW LIFESTYLE</Typography>
        </Stack>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: "primary.main",
          }}
          nextButton={
            <Fab
              sx={{
                color: "white",
              }}
              aria-label="next"
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Fab>
          }
          backButton={
            <Fab
              sx={{
                color: "white",
              }}
              aria-label="back"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Fab>
          }
        ></MobileStepper>
      </Grid>
    </Grid>
  );
}
