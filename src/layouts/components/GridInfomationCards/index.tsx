import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import type { ElementType } from "react";

interface GridInfomationCardsProps {
  boldText?: string | null;
  textColor?: string;
  bgColor: string;
  list: {
    title: string;
    primaryText: string;
    secondaryText?: string | null;
    boldDescription?: string | null;
    image?: ElementType;
  }[];
}

export const GridInfomationCards = ({
  textColor,
  boldText,
  bgColor,
  list,
}: GridInfomationCardsProps) => {
  const isDesktop = useMediaQuery("(min-width: 840px)");

  return (
    <Grid container spacing={3}>
      {list.map((item) => {
        return (
          <Grid
            color={textColor ?? "inherit"}
            size={isDesktop ? 6 : 12}
            position="relative"
            borderRadius="8px"
            bgcolor={bgColor}
            key={item.title}
            display="flex"
            gap={2}
            px={3}
          >
            <Stack gap={2} py={2} zIndex={1}>
              <Typography fontSize="1.25rem" fontWeight={700} component="h2">
                {item.title}
              </Typography>

              <Box>
                <Typography fontSize="0.75rem">{item.primaryText}</Typography>

                {item.secondaryText && (
                  <Typography fontSize="0.75rem">
                    {item.secondaryText}
                  </Typography>
                )}

                {boldText && item.boldDescription && (
                  <Typography fontSize="0.75rem">
                    <Typography
                      fontSize="0.75rem"
                      fontWeight={700}
                      component="span"
                    >
                      {boldText}:
                    </Typography>{" "}
                    {item.boldDescription}
                  </Typography>
                )}
              </Box>
            </Stack>

            {item.image && (
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
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};
