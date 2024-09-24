import { StrictMode } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home";
import Tafsir, { loader as tafsirLoader } from "./components/Tafsir";
import ContemplativeMoments, {
  loader as videoLoader,
} from "./components/ContemplativeMoments";
import Settings from "./components/Settings";
import About from "./components/About";
import TheReciter from "./components/TheReciter";
import ListenToSurah from "./components/ListenToSurah";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Quran" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":id" element={<TheReciter />} />
        <Route path=":id/:surahNumber" element={<ListenToSurah />} />
        <Route path="tafsir" element={<Tafsir />} loader={tafsirLoader} />
        <Route
          path="contemplativeMoments"
          loader={videoLoader}
          element={<ContemplativeMoments />}
        />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);
export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

//
