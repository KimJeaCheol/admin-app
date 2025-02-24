import { LoginRounded, PersonAddRounded } from "@mui/icons-material";
import Login from "../pages/authentication/Login";

const authenticationMenu = {
  id: "authentication-group",
  title: "Authentication",
  type: "group",
  children: [
    {
      id: "login",
      title: "Login",
      type: "item",
      url: "/login",
      icon: <LoginRounded />,
      component: <Login />,
      target: true,
    },
    {
      id: "register",
      title: "Register",
      type: "item",
      url: "/register",
      icon: <PersonAddRounded />,
      component: <div>Register Page</div>,
      target: true,
    },
  ],
};

export default authenticationMenu;
