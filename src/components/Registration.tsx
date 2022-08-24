import {
  ArrowDownwardOutlined,
  CheckBox,
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
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/assets/nikka_logo.png";

export default function Registration(): JSX.Element {
  interface formVal {
    name: string;
    email: string;
    telephone: string;
    location: string;
  }

  const defaultValues: formVal = {
    name: "",
    email: "",
    telephone: "",
    location: "",
  };

  const handleSubmit = ({ values: any }) => {
    console.log(values);
  };

  return (
    <Box
      className="h-[100vh] flex justify-center items-center flex-col bg-[#faf9f2]"
      id="register"
      // sx={{
      //   backgroundImage: "url(/assets/box-2-01.png)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <Stack paddingBottom={5}>
        <Typography align="center" variant="h4">
          EARLY BIRD REGISTRAITON
        </Typography>
        <Typography align="center" variant="body1">
          Register for early picks and special packages
        </Typography>
      </Stack>
      <Stack spacing={5}>
        <TextField
          color="secondary"
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Telephone"
          variant="standard"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Location"
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="By ticking this book, I hereby confirm that I understand &amp; accept your Privacy Policy and Terms and Conditions of use of the website"
        />
        <Button
          variant="contained"
          color="primary"
          className="rounded-[50px] p-[15px] w-[325px] text-xl mx-auto"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
