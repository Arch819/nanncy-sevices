import React from "react";
import { NanniesList } from "../../components/NanniesList";
import { Filter } from "../../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectNannies,
} from "../../redux/nannies/nanniesSelectors";
import { NanniesContainerStyle } from "./NanniesPage.styled";
import { changeFilter } from "../../redux/nannies/nanniesSlice";
import { Button } from "../../components/Button";

export const NanniesPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const nanniesList = useSelector(selectNannies);
  const handleChangeFilter = (value) => {
    dispatch(changeFilter(value));
  };
  return (
    <section>
      <NanniesContainerStyle className="container">
        <Filter filter={filter} onChangeFilter={handleChangeFilter} />
        <NanniesList array={nanniesList} />
        {nanniesList.length > 3 && (
          <Button text="Load more" dv_p="14px" width="160px" center />
        )}
      </NanniesContainerStyle>
    </section>
  );
};
