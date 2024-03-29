import React from "react";
import { NanniesItem } from "../NanniesItem";
import { NanniesListStyle } from "./NanniesList.styled";

export const NanniesList = ({ array }) => {
  return (
    <NanniesListStyle>
      {array.map((item) => (
        <NanniesItem key={item._id} data={item} />
      ))}
    </NanniesListStyle>
  );
};
