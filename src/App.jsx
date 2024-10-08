import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RootLayout from "./layout/RootLayout"
import Company from "./pages/Company"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Company />,
      },
      {
        path: "/",
        element: <Company />,
      },
      {
        path: "/",
        element: <Company />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
