import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./style/main.css";

import Root from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
