import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import BucketList from "./components/BucketList.tsx";

//   import Root, { rootLoader } from "./routes/root";
//   import Team, { teamLoader } from "./routes/team";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "login",
          element: <BucketList/>
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
