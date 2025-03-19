import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  sm2: "550px",
  md: "768px",
  lg: "960px",
  "2lg": "1113px",
  xl: "1200px",
  "1xl": "1236px",
  "2xl": "1536px",
};
const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        bg: "#f4f4f4",
      },
    },
  },
  fonts: {
    heading: `"Neue Haas Display", sans-serif`, // For headings (h1, h2, h3, etc.)
    body: `"Neue Haas Display", sans-serif`, // For body text
  },
  fontWeights: {
    thin: 100,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: "none",
          border: "none",
        },
      },
    },
  },
  colors: {
    primaryColor: "#0251b1",
  },
});

export default theme;
