import React from "react";
import { Filter } from "../../components/Filter";
import { NanniesList } from "../../components/NanniesList";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredFavoriteNannies,
  selectFavoriteFilter,
} from "../../redux/favorite/favoriteSelector";
import { changeFavoriteFilter } from "../../redux/favorite/favoriteSlice";
import { NanniesContainerStyle } from "../NanniesPage/NanniesPage.styled";
import { Button } from "../../components/Button";

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFavoriteFilter);
  const nannyFavoritesList = useSelector(filteredFavoriteNannies);
  const handleChangeFilter = (value) => {
    dispatch(changeFavoriteFilter(value));
  };
  return (
    <section>
      <NanniesContainerStyle className="container">
        <Filter filter={filter} onChangeFilter={handleChangeFilter} />
        <NanniesList array={nannyFavoritesList} />
        {nannyFavoritesList.length > 3 && (
          <Button text="Load more" dv_p="14px" width="160px" center />
        )}
      </NanniesContainerStyle>
    </section>
  );
};
