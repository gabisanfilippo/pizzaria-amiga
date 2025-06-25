import { Box, Stack } from "@mui/material";

import { GridInfomationCards } from "../../layouts/components/GridInfomationCards";
import { Title } from "../../components/Title";
import { DefaultLayout } from "../../layouts";
import { COMBOS } from "./constants/combos";
import { customColors } from "../../theme";

export const ComfortingCombos = () => {
  return (
    <DefaultLayout>
      <Stack component="section" gap={3}>
        <Box component="span" width="max-content">
          <Title>🍕 Combos Reconfortantes</Title>
        </Box>

        <GridInfomationCards
          textColor={customColors["white-cream"].main}
          bgColor={customColors["brown-wood"].main}
          boldText="Exemplo"
          list={COMBOS}
        />
      </Stack>
    </DefaultLayout>
  );
};
