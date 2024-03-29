import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";
import SingleMovie from "./pages/SingleMovie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<Tvseries />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
