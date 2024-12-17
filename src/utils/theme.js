export const themeOptions = {
  typography: {
    // fontFamily: '"Clash Display", Arial, sans-serif', // Add the font here
    fontFamily: '"Inter", Arial, sans-serif', // Set Inter as the default font
    h1: {
      fontFamily: '"Clash Display", Arial, sans-serif', // Clash Display for headings
    },
    h2: {
      fontFamily: '"Clash Display", Arial, sans-serif',
    },
    h3: {
      fontFamily: '"Clash Display", Arial, sans-serif',
    },
    h4: {
      fontFamily: '"Clash Display", Arial, sans-serif',
    },
    h5: {
      fontFamily: '"Clash Display", Arial, sans-serif',
    },
    h6: {
      fontFamily: '"Clash Display", Arial, sans-serif',
    },
    button: {
      fontWeight: 400, // Set the default font weight for buttons
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#044FC7",
    },
    secondary: {
      main: "#b644b7",
    },
    background: {
      default: "#151315",
      paper: "#151315",
      light: "#F2F4F7",
      navbar: "#17191C",
    },
    text: {
      primary: "#ffffff",
      secondary: "#D6D6D6",
      dark: "#110814",
    },
    divider: "#333741",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Adjust the value to your preferred roundness
          padding: "10px 20px",
        },
      },
    },
  },
};

// Palette: https://coolors.co/palette/703364-70284c-d28e78-75357c-d7aed8
