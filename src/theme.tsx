import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Define custom breakpoints
const customBreakpoints = {
  base: "0em", // 0px
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "1600px",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
};

// Extend the default theme with custom breakpoints
const theme = extendTheme({
  breakpoints: customBreakpoints,
  config,
});

export default theme;
