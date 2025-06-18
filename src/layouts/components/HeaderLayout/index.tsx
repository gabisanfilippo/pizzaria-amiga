import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import logo from "../../../assets/pngs/logo-pizzaria-amiga.png";
import { HOME } from "../../../constants/paths";
import { customColors } from "../../../theme";

export const HeaderLayout = () => {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor={customColors["red-tomato"].main}
      component="header"
      width="100%"
      mx="auto"
      px={3}
      py={2}
    >
      <Stack
        justifyContent="center"
        component="section"
        maxWidth="1500px"
        direction="row"
        width="100%"
        mx="auto"
      >
        <Stack onClick={() => navigate(HOME)} sx={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo - Pizzaria Amiga" height="40px" />
        </Stack>
      </Stack>
    </Box>
  );
};
