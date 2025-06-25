import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

import { LIBERTY_MENU } from "./constants/libertyMenu";
import { Title } from "../../components/Title";
import { DefaultLayout } from "../../layouts";
import { customColors } from "../../theme";

export const InformationRights = () => {
  const isDesktop = useMediaQuery("(min-width: 840px)");

  return (
    <DefaultLayout>
      <Stack component="section" gap={3}>
        <Box component="span" width="max-content">
          <Title>🍕 Menu da Liberdade – Ingredientes que Protegem</Title>
        </Box>

        <Grid container spacing={3}>
          {LIBERTY_MENU.map((item) => {
            return (
              <Grid
                bgcolor={customColors["beige-pasta"].main}
                position="relative"
                borderRadius="8px"
                key={item.title}
                display="flex"
                size={isDesktop ? 6 : 12}
                gap={2}
                px={3}
              >
                <Stack gap={2} py={2} zIndex={1}>
                  <Typography
                    fontSize="1.25rem"
                    fontWeight={700}
                    component="h2"
                  >
                    {item.title}
                  </Typography>

                  <Box>
                    <Typography fontSize="0.75rem">
                      {item.description}
                    </Typography>

                    <Typography fontSize="0.75rem">
                      <Typography
                        fontSize="0.75rem"
                        fontWeight={700}
                        component="span"
                      >
                        Referência:
                      </Typography>{" "}
                      {item.reference}
                    </Typography>
                  </Box>
                </Stack>

                <Box
                  component="span"
                  height="100%"
                  right={24}
                  sx={{
                    "@media (min-width: 1100px) and (max-width: 1200px)": {
                      position: "static",
                      opacity: 1,
                    },
                    "@media (min-width: 840px) and (max-width: 1100px)": {
                      position: "absolute",
                      opacity: 0.7,
                    },
                    "@media (min-width: 580px) and (max-width: 839px)": {
                      position: "static",
                      opacity: 1,
                    },
                    "@media (max-width: 579px)": {
                      position: "absolute",
                      opacity: 0.7,
                    },
                  }}
                >
                  <item.image height="100%" />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </DefaultLayout>
  );
};
