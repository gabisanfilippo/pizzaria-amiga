import { Box } from "@mui/material";
import { customColors } from "../../../theme";

export const HeaderLayout = () => {
  return (
    <Box
      bgcolor={customColors["red-tomato"].main}
      component="header"
      width="100%"
      mx="auto"
      px={3}
      py={2}
    >
      <Box component="section" maxWidth="1500px" mx="auto" width="100%">
        Pizzaria amiga
      </Box>
    </Box>
  );
};
