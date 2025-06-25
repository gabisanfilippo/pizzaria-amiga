import { Routes, Route } from "react-router-dom";

import { InformationRights } from "../pages/InformationRights";
import { ComfortingCombos } from "../pages/ComfortingCombos";
import { Home } from "../pages/Home";
import {
  INFORMATION_RIGHTS,
  COMFORTING_COMBOS,
  HOME,
} from "../constants/paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={INFORMATION_RIGHTS} element={<InformationRights />} />
      <Route path={COMFORTING_COMBOS} element={<ComfortingCombos />} />
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
};
