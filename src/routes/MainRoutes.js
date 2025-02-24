import React from "react";
import MainLayout from "../layouts/MainLayout";
import menuItems from "../menu-items";
import NotFound from "../pages/not-found/NotFound";

const MainRoutes = menuItems.items.flatMap((group) =>
  group.children.map((item) => ({
    path: item.url,
    element: (
      <MainLayout>{item.component ? item.component : <NotFound />}</MainLayout>
    ),
  }))
);

export default MainRoutes;
