import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { notiflixMessage } from "../../utils/notiflixMessages";
import Loader from "../Loader";
import { Header } from "../Header";
import {
  selectError,
  selectIsLoading,
} from "../../redux/appState/appStateSelectors";
import { handleFetch } from "../../api";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    error && notiflixMessage("error", error);
  }, [error]);

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
    </>
  );
};
