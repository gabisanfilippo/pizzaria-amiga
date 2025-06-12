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
        }}
      />
      {children}
    </ThemeProvider>
  );
};
