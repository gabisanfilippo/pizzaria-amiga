import { Box, Stack, Typography } from "@mui/material";

interface HelpsListProps {
  list: { title: string; subtitle: string }[];
}

export const HelpsList = ({ list }: HelpsListProps) => {
  return (
    <Stack component="ul" pl={2}>
      {list.map((ingredient) => {
        return (
          <Box
            sx={{ listStyleType: "disc" }}
            key={ingredient.title}
            component="li"
          >
            <Stack>
              <Typography component="h4" fontWeight={700}>
                {ingredient.title}
              </Typography>
              <Typography fontSize="0.8rem">{ingredient.subtitle}</Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};
