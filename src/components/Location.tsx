import { ArrowDownwardOutlined, MenuOutlined } from "@mui/icons-material";
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
} from "@mui/material";
import Image from "next/image";
import map from "../../public/assets/Nikka_map.png";

export default function Lifestyle(): JSX.Element {
  return (
    <Grid
      id="location"
      container
      className="h-[100vh] bg-black pl-[10vw]"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Stack spacing={8}>
          <Typography variant="h4" color="white">
            LOCATION
          </Typography>
          <Typography variant="body1" color="white">
            NIKKA City Sentral is easy accessible via 6 Major Highways and is
            50m to the LRT Salak Selatan Station with various amennities within
            a 3KM radius.
          </Typography>
          <Box>
            <Typography variant="body1" color="white">
              HIGHWAYS:
            </Typography>
            <Grid container direction="row">
              <Grid item xs={6} container direction="column">
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">KL Seremban Highway</li>
                </Grid>
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">East West Link Highway</li>
                </Grid>
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">(Lebuhraya Salak) Mex Highway</li>
                </Grid>
              </Grid>
              <Grid item xs={6} container direction="column">
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">Sungai Besi Highway (BESRaya)</li>
                </Grid>
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">SMART Highway</li>
                </Grid>
                <Grid item xs={3} className="list-[square]">
                  <li className="text-white">Federal Highway</li>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Image
            src={map}
            alt="nikka map"
            objectFit="contain"
            width="500px"
            height="500px"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
