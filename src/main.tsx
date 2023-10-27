import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

//   import Root, { rootLoader } from "./routes/root";
//   import Team, { teamLoader } from "./routes/team";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "team",
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
