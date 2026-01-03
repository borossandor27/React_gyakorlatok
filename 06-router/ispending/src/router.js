import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Users, { usersLoader } from "./Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: usersLoader,
  },
]);
