import {
  BarChartRounded,
  DashboardRounded,
  PieChartRounded,
} from "@mui/icons-material";
import DashboardDefault from "../pages/dashboard/DashboardDefault";

const dashboardMenu = {
  id: "dashboard-group",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "dashboard-default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: <DashboardRounded />,
      component: <DashboardDefault />,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: "Analytics",
      type: "item",
      url: "/dashboard/analytics",
      icon: <BarChartRounded />,
      component: <div>Analytics Page</div>,
      breadcrumbs: false,
    },
    {
      id: "reports",
      title: "Reports",
      type: "item",
      url: "/dashboard/reports",
      icon: <PieChartRounded />,
      component: <div>Reports Page</div>,
      breadcrumbs: false,
    },
  ],
};

export default dashboardMenu;
