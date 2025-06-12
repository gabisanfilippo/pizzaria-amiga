import { Box, Stack } from "@mui/material";

import { HeaderLayout } from "./components/HeaderLayout";
import { FooterLayout } from "./components/FooterLayout";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack height="100vh">
      <HeaderLayout />

      <Box mx="auto" flex={1} px={3} py={2} width="100%">
        <Box maxWidth="1300px" component="main">
          {children}
        </Box>
      </Box>

      <FooterLayout />
    </Stack>
  );
};
