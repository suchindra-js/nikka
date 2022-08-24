import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Box, Fab, Toolbar } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/assets/nikka_logo.png";

export default function Header(): JSX.Element {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="bg-transparent flex justify-between items-center p-[10px]"
    >
      <Image src={logo} alt="Nikka Logo" width={100} height={100}></Image>
      <Fab color="primary" aria-label="menu">
        <MenuOutlined />
      </Fab>
    </Box>
  );
}
