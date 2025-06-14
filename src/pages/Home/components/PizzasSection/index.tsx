import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Title } from "../../../../components/Title";
import { customColors } from "../../../../theme";
import { PIZZAS } from "../../constants/pizzas";

export const PizzasSection = () => {
  const navigate = useNavigate();

  return (
    <Stack component="section" gap={2}>
      <Title>Faça já o seu pedido!</Title>
      <Stack
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
        component="ul"
        gap={2}
      >
        {PIZZAS.map((pizza) => {
          return (
            <Stack
              sx={{
                transition: "transform 0.3s ease-in-out",
                ":hover": { transform: "scale(1.05)" },
                cursor: "pointer",
              }}
              onClick={() => navigate(pizza.path)}
              justifyContent="center"
              alignItems="center"
              position="relative"
              key={pizza.title}
              component="li"
            >
              <Stack
                bgcolor={customColors["green-basil"].main}
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                width="15rem"
                zIndex={1}
                mt="50px"
                px={3}
                py={2}
              >
                <Typography
                  color={customColors["white-cream"].main}
                  fontWeight={700}
                  component="h2"
                >
                  {pizza.title}
                </Typography>
                <Typography fontSize="0.8rem" textAlign="center">
                  {pizza.subtitle}
                </Typography>
              </Stack>
              <Box component="span" position="absolute" top={0}>
                <pizza.image />
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
