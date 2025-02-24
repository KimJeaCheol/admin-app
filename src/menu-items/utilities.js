import { BuildRounded, ColorLensRounded } from "@mui/icons-material";

const utilitiesMenu = {
  id: "utilities-group",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: "/utilities/settings",
      icon: <BuildRounded />,
      component: <div>Settings Page</div>,
    },
    {
      id: "themes",
      title: "Themes",
      type: "item",
      url: "/utilities/themes",
      icon: <ColorLensRounded />,
      component: <div>Themes Page</div>,
    },
  ],
};

export default utilitiesMenu;
