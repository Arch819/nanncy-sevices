import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { FavoritesPage } from "../Pages/FavoritesPage";
import { HomePage } from "../Pages/HomePage";
import { NanniesPage } from "../Pages/NanniesPage/NanniesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
