import { Routes, Route } from "react-router-dom";

import { HOME } from "../constants/paths";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
};
