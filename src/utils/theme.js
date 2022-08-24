import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
      body {
        background-color: #ffffff
      }
      `
    }
  },
 palette: {
   primary: {
     main: "#ffd500",
   },
   secondary: {
    main: "#000000"
   },
 },
 typography: {
  fontFamily: [
    'Blinker', 'inter'
  ].join(','),
 }
});
