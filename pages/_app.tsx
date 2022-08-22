import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "@utils/theme";
import createEmotionCache from "@utils/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
require("typeface-blinker");
import "tailwindcss/tailwind.css";

interface Props extends AppProps {
  emotionCache: any;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
