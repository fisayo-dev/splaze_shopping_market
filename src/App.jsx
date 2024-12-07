import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home,Login,NotFound,Signup, Store } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/store" element={<Store/>} />
      </>
    ));

  return <RouterProvider router={router} />;
}

export default App;
