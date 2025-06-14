import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";

import { customColors, theme } from "..";

export const GlobalStyle = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: customColors["white-cream"].main,
            color: customColors["black-coffee"].main,
          },
          "*": { padding: 0, margin: 0, listStyle: "none" },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
