import React from "react";
import { Filter } from "../components/Filter";
import { NanniesList } from "../components/NanniesList";
import { useSelector } from "react-redux";
import { filteredFavoriteNannies } from "../redux/favorite/favoriteSelector";

export const FavoritesPage = () => {
  const nannyFavoritesList = useSelector(filteredFavoriteNannies);
  return (
    <section>
      <div className="container">
        <Filter />
        <NanniesList array={nannyFavoritesList} />
      </div>
    </section>
  );
};
