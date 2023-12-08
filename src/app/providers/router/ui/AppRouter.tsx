import { memo, Suspense, useCallback } from "react";
import {
  AppRoutesProps,
  routeConfig,
} from "../../../../shared/config/routeConfig.tsx";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth.tsx";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div />}>{route.element}</Suspense> //add loader instead of div
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
      {/* {routes.map(({ element, path }) => ( */}

      {/* ))} */}
    </Routes>
  );
};

export default memo(AppRouter);
