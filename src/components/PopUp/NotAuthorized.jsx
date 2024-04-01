import React from "react";
import {
  ActionsListStyle,
  MessageStyle,
  TitleStyle,
} from "./NotAuthorized.styled";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { togglePopUp } from "../../redux/appState/appStateSlice";

export const NotAuthorized = () => {
  const dispatch = useDispatch();
  const openPopUp = (popUp) => {
    dispatch(togglePopUp(popUp));
  };
  return (
    <>
      <TitleStyle>Not authorized</TitleStyle>
      <MessageStyle>Register or log in to continue</MessageStyle>
      <ActionsListStyle>
        <li>
          <Button onClick={() => openPopUp("signUp")} dv_p="14px 30px">
            Registration
          </Button>
        </li>
        <li>
          <Button onClick={() => openPopUp("signIn")} dv_p="14px 30px">
            Log In
          </Button>
        </li>
      </ActionsListStyle>
    </>
  );
};
