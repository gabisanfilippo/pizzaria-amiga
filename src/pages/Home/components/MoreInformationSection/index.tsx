import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { MORE_INFORMATION } from "../../constants/moreInformation";
import { Title } from "../../../../components/Title";
import { customColors } from "../../../../theme";

export const MoreInformationSection = () => {
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
        {MORE_INFORMATION.map((item) => {
          return (
            <Stack
              sx={{
                transition: "transform 0.3s ease-in-out",
                ":hover": { transform: "scale(1.05)" },
                cursor: "pointer",
                width: "100%",
                "@media (min-width: 690px)": {
                  width: "19rem",
                },
              }}
              bgcolor={customColors["brown-wood"].main}
              onClick={() => navigate(item.path)}
              justifyContent="center"
              position="relative"
              borderRadius="8px"
              key={item.title}
              component="li"
              height="9rem"
              gap={2}
              px={2}
              py={3}
            >
              <Typography
                sx={{
                  width: "100%",
                  "@media (min-width: 690px)": {
                    width: "15rem",
                  },
                }}
                color={customColors["white-cream"].main}
                fontWeight={700}
                component="h2"
                zIndex={1}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  "@media (min-width: 690px)": {
                    width: "15rem",
                  },
                }}
                color={customColors["white-cream"].main}
                fontSize="0.8rem"
                zIndex={1}
              >
                {item.subtitle}
              </Typography>
              <Box
                sx={{ opacity: 0.5 }}
                position="absolute"
                component="span"
                height="9rem"
                right={0}
              >
                <item.image height="9rem" />
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
