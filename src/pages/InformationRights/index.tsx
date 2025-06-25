import { Box, Stack } from "@mui/material";

import { GridInfomationCards } from "../../layouts/components/GridInfomationCards";
import { LIBERTY_MENU } from "./constants/libertyMenu";
import { Title } from "../../components/Title";
import { DefaultLayout } from "../../layouts";
import { customColors } from "../../theme";

export const InformationRights = () => {
  return (
    <DefaultLayout>
      <Stack component="section" gap={3}>
        <Box component="span" width="max-content">
          <Title>🍕 Menu da Liberdade – Ingredientes que Protegem</Title>
        </Box>

        <GridInfomationCards
          bgColor={customColors["beige-pasta"].main}
          boldText="Referência"
          list={LIBERTY_MENU}
        />
      </Stack>
    </DefaultLayout>
  );
};
