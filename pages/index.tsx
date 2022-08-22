import type { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Home: NextPage = () => {
  return (
    <Container className="h-[100vh]">
      <Paper className="w-1/2 h-1/2 fixed top-0 bottom-0 right-0 left-0 m-auto">
        <Typography
          component="h1"
          sx={{ color: "primary.dark" }}
          className="text-[24px] font-semibold text-center"
        >
          Weather App
        </Typography>
        <Box component="form" className="w-[391px]">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter city name"
            inputProps={{ "aria-label": "enter city name" }}
          />
          <IconButton
            sx={{ backgroundColor: "primary.dark", borderRadius: 0 }}
            type="button"
            aria-label="search"
          >
            <SearchOutlinedIcon color="secondary" />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
