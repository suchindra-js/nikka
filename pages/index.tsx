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
import Hero from "@components/Hero";
import Extra from "@components/Extra";
import Lifestyle from "@components/Lifestyle";
import Registration from "@components/Registration";
import Location from "@components/Location";
const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Extra />
      <Location />
      <Lifestyle />
      <Registration />
    </Box>
  );
};

export default Home;
