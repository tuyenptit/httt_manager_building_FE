import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RootLayout from "./layout/RootLayout"
import Company from "./pages/Company"
import Employees from "./pages/Employess"
import Buildingemployees from "./pages/Buildingemployees"
import Services from "./pages/Services"
import Access_log from "./pages/Access_log"
import Service_usage from "./pages/Service_usage"
import Salaries from "./pages/Salaries"

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
        path: "/employees",
        element: <Employees/>,
      },
      {
        path: "/buildingemployees",
        element: <Buildingemployees/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/access_log",
        element: <Access_log/>,
      },
      {
        path: "/service_usage",
        element: <Service_usage/>,
      },
      {
        path: "/salaries",
        element: <Salaries/>,
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
