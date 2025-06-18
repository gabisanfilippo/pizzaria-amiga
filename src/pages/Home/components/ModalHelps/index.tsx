import { Button, Modal, Stack, Typography } from "@mui/material";

import { ADDRESSES_PICK_UP } from "../../constants/addressesPickUp";
import { INGREDIENTS_LIST } from "../../constants/ingredientsList";
import { customColors } from "../../../../theme";
import { HelpsList } from "../HelpsList";

interface ModalHelpsProps {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalHelps = ({ isOpen, onClose }: ModalHelpsProps) => {
  return (
    <Modal open={isOpen} onClose={onClose} sx={{ backdropFilter: "blur(4px)" }}>
      <Stack
        sx={{
          transform: "translate(-50%, -50%)",
          outline: "none",
          "@media (max-width: 990px)": {
            width: "31rem",
          },
          "@media (max-width: 550px)": {
            width: "calc(100% - 2rem)",
          },
        }}
        bgcolor={customColors["beige-pasta"].main}
        position="absolute"
        borderRadius="8px"
        left="50%"
        top="50%"
        gap={2}
        p={3}
      >
        <Typography
          color={customColors["green-basil"].main}
          fontWeight={800}
          fontSize="1.25rem"
          component="h3"
        >
          Confira a lista de ingredientes:
        </Typography>
        <HelpsList list={INGREDIENTS_LIST} />

        <Typography
          color={customColors["green-basil"].main}
          fontWeight={800}
          fontSize="1.25rem"
          component="h3"
        >
          Confira os endereços para retirada:
        </Typography>
        <HelpsList list={ADDRESSES_PICK_UP} />

        <Button
          sx={{ bgcolor: customColors["green-basil"].main }}
          variant="contained"
          onClick={onClose}
        >
          Fechar
        </Button>
      </Stack>
    </Modal>
  );
};
