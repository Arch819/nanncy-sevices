import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../Pages/HomePage";
import { NanniesPage } from "../Pages/NanniesPage/NanniesPage";
import { FavoritePage } from "../Pages/FavoritePage";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route
            path="/favorite"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritePage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
