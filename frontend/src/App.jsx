import { AppLayout } from "./Layouts/appLayout.jsx";
import { About } from "./pages/About.jsx";
import { Auth } from "./pages/Auth.jsx";
import { History } from "./pages/History.jsx";
import HomeComponent from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomeComponent />,
        },
        {
          path: "about",
          element: <About />,
        },
        { path: "history", element: <History /> },
        {
          path: "auth",
          element: <Auth />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
