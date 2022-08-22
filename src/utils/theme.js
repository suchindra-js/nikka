import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
      body {
        background-color: ${themeParam.palette.secondary.light}
      }
      `
    }
  },
 palette: {
   primary: {
     main: "#508991",
     dark: "#172A3A"
   },
   secondary: {
    main: "#EAEAEA",
    light: "#FDFDFF"
   },
   error: {
    main: "#F4E7E1"
   }, 
   success: {
    main: "#508991"
   }
 },
 typography: {
  fontFamily: [
    'Blinker', 'inter'
  ].join(','),
 }
});
