import { createSelector } from "@reduxjs/toolkit";

export const selectFavorite = (state) => state.favorite.favoriteNannies;
export const selectFavoriteFilter = (state) => state.favorite.favoriteFilter;

export const filteredFavoriteNannies = createSelector(
  [selectFavorite, selectFavoriteFilter],
  (favorite, filter) => {
    switch (filter) {
      case "A to Z":
        return sortList(favorite, "AZ");
      case "Z to A":
        return sortList(favorite, "ZA");
      case "Less than 10$":
        return filterLessGreaterThanTen(favorite, "<");
      case "Greater than 10$":
        return filterLessGreaterThanTen(favorite, ">");
      case "Popular":
        return sortList(favorite, "ratingUp");
      case "Not popular":
        return sortList(favorite, "ratingDown");
      case "Show all":
        return favorite;
      default:
        return favorite;
    }
  }
);

function sortList(array, type) {
  if (!array) {
    return [];
  }
  let arraySort;
  if (type === "AZ") {
    arraySort = [...array].sort((a, b) => a.name.localeCompare(b.name));
  } else if (type === "ZA") {
    arraySort = [...array].sort((a, b) => b.name.localeCompare(a.name));
  } else if (type === "ratingUp") {
    arraySort = [...array].sort((a, b) => a.rating - b.rating);
  } else if (type === "ratingDown") {
    arraySort = [...array].sort((a, b) => b.rating - a.rating);
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
