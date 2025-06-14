import { Typography } from "@mui/material";
import { type ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      textAlign="center"
      fontSize="1.25rem"
      fontWeight={800}
      component="h1"
    >
      {children}
    </Typography>
  );
};
