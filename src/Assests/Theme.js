import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue1000: "#02112B",
    blue800: "#284EFF",
    blue400: "#79ABFF",
    blue300: "#B2C6FF",
    grey100: "#F5F5F5",
    grey500: "#B7B7B7",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    tiny: "0.8em",
    small: "1em",
    middle: "1.5em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
