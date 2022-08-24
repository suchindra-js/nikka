import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
