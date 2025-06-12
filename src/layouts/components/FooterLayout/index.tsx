import { Box, Typography } from "@mui/material";
import { customColors } from "../../../theme";

export const FooterLayout = () => {
  return (
    <Box
      bgcolor={customColors["yellow-cheese"].main}
      component="footer"
      width="100%"
      mx="auto"
      px={3}
      py={1}
    >
      <Typography variant="h6" textAlign="center" maxWidth="1300px">
        Lembre-se: você não é a única que precisa de uma pizza.
      </Typography>
    </Box>
  );
};
