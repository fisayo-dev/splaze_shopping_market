import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home, Login, NotFound, Signup, Store } from "./pages";
import {
  Books,
  Electronics,
  Fashion,
  GadgetsAndDevices,
  HealthAndBeauty,
  SportsAndOutdoors,
  HomeAndKitchen,
} from "./pages/categories";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/store/all" element={<Store />} />
        <Route path="/store/fashion" element={<Fashion />} />
        <Route path="/store/electronics" element={<Electronics />} />
        <Route path="/store/home-and-kitchen" element={<HomeAndKitchen />} />
        <Route path="/store/health-and-beauty" element={<HealthAndBeauty />} />
        <Route path="/store/sports-and-outdoors" element={<SportsAndOutdoors />} />
        <Route path="/store/books" element={<Books />} />
        <Route path="/store/gadgets-and-devices" element={<GadgetsAndDevices />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
