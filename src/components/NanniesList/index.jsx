import React from "react";
import { NanniesItem } from "../NanniesItem";
import { NanniesListStyle } from "./NanniesList.styled";
import { isInclude } from "../../utils/isInclude";
import { selectFavorite } from "../../redux/favorite/favoriteSelector";
import { useSelector } from "react-redux";
import MessageNotFound from "../MessageNotFound";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const NanniesList = ({ array }) => {
  const favoriteList = useSelector(selectFavorite);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {array.length ? (
        <NanniesListStyle>
          {array.map((item) => {
            let isFavorite = false;
            if (isLoggedIn) {
              isFavorite = isInclude(favoriteList, "_id", item._id).isExist;
            }
            return (
              <NanniesItem key={item._id} data={item} isFavorite={isFavorite} />
            );
          })}
        </NanniesListStyle>
      ) : (
        <MessageNotFound />
      )}
    </>
  );
};
