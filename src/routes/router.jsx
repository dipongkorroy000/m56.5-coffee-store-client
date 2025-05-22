import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Users from "../components/Users";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/users",
        loader: () => fetch(`https://coffee-store-server-j45b6r404-dipongkor-roys-projects.vercel.app/users`),
        Component: Users,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
