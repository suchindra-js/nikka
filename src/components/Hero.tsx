import {
  ArrowDownwardOutlined,
  CloseOutlined,
  FacebookRounded,
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
  Drawer,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/assets/nikka_logo.png";

export default function Hero(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box
      className="h-[100vh] relative"
      sx={{
        backgroundImage: "url(/assets/desktop_bg.png)",
        backgroundRepeat: "no-repeat",
        padding: "50px 40px 0px 100px",
      }}
    >
      <Box
        sx={{ flexGrow: 1 }}
        className="bg-transparent flex justify-between items-start"
      >
        <Image src={logo} alt="Nikka Logo" width={100} height={100}></Image>
        <Fab color="primary" aria-label="menu" onClick={toggleDrawer}>
          <MenuOutlined />
        </Fab>
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          backgroundImage: "url(/assets/box.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
        className="w-1/2 h-1/2 flex items-start justify-center ml-[100px]"
      >
        <Typography
          align="left"
          variant="body1"
          sx={{
            fontWeight: "700",
            fontSize: "40px",
            width: "350px",
            lineHeight: "1",
            marginLeft: "20px",
          }}
        >
          LRT SALAK SELATAN AT YOUR DOORSTEP
        </Typography>
        <Typography
          align="left"
          variant="body1"
          sx={{
            fontWeight: "600",
            fontSize: "25px",
            width: "250px",
            lineHeight: "1",
            color: "primary.main",
            backgroundColor: "black",
            padding: "5px",
            marginLeft: "20px !important",
          }}
        >
          FROM RM 43X,XXX
        </Typography>
        <Typography
          align="left"
          variant="body1"
          sx={{
            fontWeight: "700",
            fontSize: "20px",
            width: "350px",
            lineHeight: "1",
            marginLeft: "20px !important",
          }}
        >
          DUAL KEY UNITS, 5 ROOMS
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        className=" absolute bottom-[50px] left-[60px] items-center"
      >
        <a href="#register">
          <Fab color="secondary" aria-label="button">
            <ArrowDownwardOutlined />
          </Fab>
        </a>
        <a href="#register" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            className="rounded-[50px] p-[15px] w-[325px] text-xl"
          >
            EARLY BIRD REGISTRATION
          </Button>
        </a>
      </Stack>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          width="50vw"
          height="100vh"
          sx={{ backgroundColor: "black", position: "relative" }}
        >
          <Stack paddingX={5} paddingTop={5}>
            <Fab
              size="small"
              color="primary"
              aria-label="close"
              onClick={toggleDrawer}
              sx={{ position: "absolute", right: "40px" }}
            >
              <CloseOutlined />
            </Fab>
            <List>
              <a
                href="#features"
                onClick={toggleDrawer}
                style={{ textDecoration: "none" }}
              >
                <ListItemText
                  sx={{
                    color: "white",
                    paddingTop: "40px",
                    fontWeight: "900",
                    fontSize: "24px",
                  }}
                >
                  FEATURES
                </ListItemText>
              </a>
              <a
                href="#location"
                onClick={toggleDrawer}
                style={{ textDecoration: "none" }}
              >
                <ListItemText
                  sx={{ color: "white", paddingTop: "40px" }}
                  className="font-extrabold"
                >
                  LOCATION
                </ListItemText>
              </a>
              <a
                href="#lifestyle"
                onClick={toggleDrawer}
                style={{ textDecoration: "none" }}
              >
                <ListItemText
                  sx={{ color: "white", paddingTop: "40px" }}
                  className="font-extrabold"
                >
                  LIFESTYLE
                </ListItemText>
              </a>
              <a
                href="#register"
                onClick={toggleDrawer}
                style={{ textDecoration: "none" }}
              >
                <ListItemText
                  sx={{ color: "white", paddingTop: "40px" }}
                  className="font-extrabold"
                >
                  REGISTER NOW
                </ListItemText>
              </a>
            </List>
            <Stack
              sx={{
                position: "absolute",
                bottom: "20px",
                right: "40px",
                left: "40px",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              <Typography color="white" variant="body1">
                Nikkacitysentral © 2020
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography color="white" variant="body1">
                  Follow us on
                </Typography>
                <FacebookRounded color="primary" />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
