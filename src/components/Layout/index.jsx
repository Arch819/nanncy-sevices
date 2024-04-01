import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { notiflixMessage } from "../../utils/notiflixMessages";
import Loader from "../Loader";
import { Header } from "../Header";
import {
  selectError,
  selectIsLoading,
  selectPopUp,
} from "../../redux/appState/appStateSelectors";
import { handleFetch } from "../../api";
import { DialogComponent } from "../DialogComponent";
import { togglePopUp } from "../../redux/appState/appStateSlice";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const popUp = useSelector(selectPopUp);
  const dispatch = useDispatch();
  useEffect(() => {
    error && notiflixMessage("error", error);
  }, [error]);

  const handleClosePopUp = () => {
    dispatch(togglePopUp(""));
  };

  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <button
        onClick={handleFetch}
        style={{ position: "absolute", top: "100px" }}
      >
        FETCH
      </button>
      <DialogComponent
        open={Boolean(popUp)}
        popUp={popUp}
        handleClose={handleClosePopUp}
      />
    </>
  );
};
