import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { Link } from "react-router-dom";
import menuItems from "../menu-items";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon /> },
  { text: "Clients", icon: <PeopleRoundedIcon /> },
  { text: "Tasks", icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List>
        {menuItems.items.map((group) => (
          <React.Fragment key={group.id}>
            <ListItem sx={{ paddingTop: 2, paddingBottom: 1 }}>
              <ListItemText
                primary={group.title}
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              />
            </ListItem>
            {group.children.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton component={Link} to={item.url}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Stack>
  );
}
