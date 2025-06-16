import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Title } from "../../../../components/Title";
import { HOUSE_FLAVORS } from "../../constants/houseFlavors";
import { customColors } from "../../../../theme";

export const HouseFlavorsSection = () => {
  const navigate = useNavigate();

  return (
    <Stack component="section" gap={2} mt={4}>
      <Title>Mais informações</Title>

      <Stack
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
        component="ul"
        gap={2}
      >
        {HOUSE_FLAVORS.map((item) => {
          return (
            <Stack
              sx={{
                transition: "transform 0.3s ease-in-out",
                ":hover": { transform: "scale(1.05)" },
                cursor: "pointer",
                width: "100%",
                "@media (min-width: 690px)": {
                  width: "39rem",
                },
              }}
              bgcolor={customColors["red-tomato"].main}
              onClick={() => navigate(item.path)}
              alignItems="center"
              borderRadius="8px"
              key={item.title}
              direction="row"
              component="li"
              gap={2}
              px={3}
              py={2}
            >
              <Stack gap={2}>
                <Typography
                  color={customColors["white-cream"].main}
                  fontSize="1.2rem"
                  fontWeight={700}
                  component="h2"
                >
                  {item.title}
                </Typography>
                <Typography fontSize="0.8rem">{item.subtitle}</Typography>
              </Stack>

              <Box component="span">
                <img
                  src={item.gif}
                  alt={item.alt}
                  width="150px"
                  height="150px"
                />
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
