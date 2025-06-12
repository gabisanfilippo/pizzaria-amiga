import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    "red-tomato": Palette["primary"];
    "yellow-cheese": Palette["primary"];
    "beige-pasta": Palette["primary"];
    "brown-wood": Palette["primary"];
    "green-basil": Palette["primary"];
    "white-cream": Palette["primary"];
    "black-coffee": Palette["primary"];
  }

  interface PaletteOptions {
    "red-tomato"?: PaletteOptions["primary"];
    "yellow-cheese"?: PaletteOptions["primary"];
    "beige-pasta"?: PaletteOptions["primary"];
    "brown-wood"?: PaletteOptions["primary"];
    "green-basil"?: PaletteOptions["primary"];
    "white-cream"?: PaletteOptions["primary"];
    "black-coffee"?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    "red-tomato": { main: "#D32F2F" },
    "yellow-cheese": { main: "#FFC107" },
    "beige-pasta": { main: "#F5E1A4" },
    "brown-wood": { main: "#795548" },
    "green-basil": { main: "#4CAF50" },
    "white-cream": { main: "#FFF8E1" },
    "black-coffee": { main: "#2C1B18" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {},
});

export const customColors = theme.palette