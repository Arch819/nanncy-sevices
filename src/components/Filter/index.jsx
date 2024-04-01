import React from "react";
import sprite from "../../img/sprite.svg";
import { filterOptions } from "../../data/filterNannies";
import {
  FilterContainerStyle,
  FilterLabelStyle,
  FilterSelectStyle,
  MenuItemStyle,
} from "./Filter.styled";

const MenuProps = {
  PaperProps: {
    style: {
      paddingTop: "8px",
      background: "transparent",
      boxShadow: "none",
    },
  },
  MenuListProps: {
    style: {
      padding: "14px 18px 18px",
      background: "#FFFFFF",
      borderRadius: "14px",
    },
  },
};

const ChevronDownIcon = () => (
  <svg className="select-icon" width={20} height={20}>
    <use href={`${sprite}#icon-chevron-down`}></use>
  </svg>
);

export const Filter = ({ filter, onChangeFilter }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChangeFilter(value);
  };
  return (
    <FilterContainerStyle>
      <FilterLabelStyle>
        <span className="label-text">Filters</span>
        <FilterSelectStyle
          className="select"
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={filter}
          onChange={handleChange}
          IconComponent={ChevronDownIcon}
          MenuProps={MenuProps}
        >
          {filterOptions.map((option) => (
            <MenuItemStyle
              key={option}
              value={option}
              className={filter.includes(option) ? "selected-item" : ""}
            >
              {option}
            </MenuItemStyle>
          ))}
        </FilterSelectStyle>
      </FilterLabelStyle>
    </FilterContainerStyle>
  );
};
