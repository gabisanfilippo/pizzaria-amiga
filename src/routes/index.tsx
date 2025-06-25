import { Routes, Route } from "react-router-dom";

import { InformationRights } from "../pages/InformationRights";
import { HOME, INFORMATION_RIGHTS } from "../constants/paths";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={INFORMATION_RIGHTS} element={<InformationRights />} />
    </Routes>
  );
};
