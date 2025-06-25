import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

import { Title } from "../../../../components/Title";
import { customColors } from "../../../../theme";
import { PIZZAS } from "../../constants/pizzas";
import { ModalHelps } from "../ModalHelps";
import { useNavigate } from "react-router-dom";

export const PizzasSection = () => {
  const [isHelpsModalOpen, setIsHelpsModalOpen] = useState(false);
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
                width: "100%",
                "@media (min-width: 540px)": {
                  width: "15rem",
                },
              }}
              onClick={() =>
                pizza.clickCallback({
                  setModalState: setIsHelpsModalOpen,
                  navigate,
                })
              }
              justifyContent="center"
              alignItems="center"
              position="relative"
              key={pizza.title}
              component="li"
            >
              <Stack
                sx={{
                  width: "100%",
                  "@media (min-width: 540px)": {
                    width: "15rem",
                  },
                }}
                bgcolor={customColors["green-basil"].main}
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                zIndex={1}
                mt="50px"
                px={3}
                py={2}
              >
                <Typography
                  color={customColors["white-cream"].main}
                  fontSize="1.2rem"
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

      <ModalHelps
        isOpen={isHelpsModalOpen}
        onClose={() => setIsHelpsModalOpen(false)}
      />
    </Stack>
  );
};
