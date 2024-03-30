import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DialogComponent } from "../DialogComponent";
import { SignUpForm } from "../forms/SignUpForm";
import { SignInForm } from "../forms/SignInForm";
import sprite from "../../img/sprite.svg";
import {
  SignActionsListStyle,
  UserActionsBoxStyle,
  UserInfoBoxStyle,
  UserLoggedInBoxStyle,
} from "./UserActions.styled.";
import { Button } from "../Button";

export const UserActions = () => {
  const [signPopUp, setSignPopUp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const user = useSelector();
  const user = {};

  const popUp = () => {
    if (signPopUp === "signIn") {
      return <SignInForm />;
    }
    if (signPopUp === "signUp") {
      return <SignUpForm />;
    }
  };
  const handleClosePopUp = () => {
    setSignPopUp("");
  };

  const handleToggleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <UserActionsBoxStyle>
      {isLoggedIn ? (
        <UserLoggedInBoxStyle>
          <UserInfoBoxStyle>
            <div className="user-avatar">
              {user.avatar_url ? (
                <img src={user.avatar_url} alt="user's avatar" />
              ) : (
                <svg className="avatar-icon" width={24} height={24}>
                  <use href={`${sprite}#icon-default_user-avatar`}></use>
                </svg>
              )}
            </div>
            <p className="user-name">Irina</p>
          </UserInfoBoxStyle>
          <Button
            text={"Log out"}
            width={134}
            mv_p="8px 16px"
            tv_p="12px 32px"
            dv_p="14px 40px"
          />
        </UserLoggedInBoxStyle>
      ) : (
        <SignActionsListStyle>
          <li>
            <Button
              onClick={() => setSignPopUp("signIn")}
              text="Log In"
              mv_p="8px 16px"
              tv_p="12px 32px"
              dv_p="14px 40px"
            />
          </li>
          <li>
            <Button
              className={"sign-up"}
              onClick={() => setSignPopUp("signUp")}
              text="Registration"
              br_c="transparent"
              mv_p="8px 16px"
              tv_p="12px 32px"
              dv_p="14px 40px"
              color="#F03F3B"
              bg="#FBFBFB"
            />
          </li>
        </SignActionsListStyle>
      )}
      <DialogComponent open={Boolean(signPopUp)} handleClose={handleClosePopUp}>
        {popUp()}
      </DialogComponent>
      <button
        style={{ position: "absolute", right: "0" }}
        onClick={handleToggleLoggedIn}
      >
        Toggle
      </button>
    </UserActionsBoxStyle>
  );
};
