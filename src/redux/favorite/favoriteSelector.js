import { createSelector } from "@reduxjs/toolkit";

export const selectFavorite = (state) => state.favorite.favoriteNannies;
export const selectFavoriteFilter = (state) => state.favorite.favoriteFilter;

export const filteredFavoriteNannies = createSelector(
  [selectFavorite, selectFavoriteFilter],
  (favorite, filter) => {
    const filterFavorite = favorite;
    switch (filter) {
      case "A to Z":
        return sortList(filterFavorite, "AZ");
      case "Z to A":
        return sortList(filterFavorite, "ZA");
      case "Less than 10$":
        return filterLessGreaterThanTen(filterFavorite, "<");
      case "Greater than 10$":
        return filterLessGreaterThanTen(filterFavorite, ">");
      case "Popular":
        return sortList(filterFavorite, "ratingUp");
      case "Not popular":
        return sortList(filterFavorite, "ratingDown");
      case "Show all":
        return filterFavorite;
      default:
        return filterFavorite;
    }
  }
);

function sortList(array, type) {
  if (!array) {
    return [];
  }
  let arraySort;
  if (type === "AZ") {
    arraySort = array.sort((a, b) => a.name.localeCompare(b.name));
  } else if (type === "ZA") {
    arraySort = array.sort((a, b) => b.name.localeCompare(a.name));
  } else if (type === "ratingUp") {
    arraySort = array.sort((a, b) => a.rating - b.rating);
  } else if (type === "ratingDown") {
    arraySort = array.sort((a, b) => b.rating - a.rating);
  } else {
    arraySort = array;
  }

  return arraySort;
}
function filterLessGreaterThanTen(array, sign) {
  return array.filter((i) => {
    if (sign === "<") {
      return i.price_per_hour < 10;
    } else if (sign === ">") {
      return i.price_per_hour > 10;
    } else {
      return array;
    }
  });
}
