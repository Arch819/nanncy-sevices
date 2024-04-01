import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { togglePopUp } from "../../redux/appState/appStateSlice";
import {
  selectIsLoggedIn,
  selectProfile,
} from "../../redux/auth/authSelectors";
import sprite from "../../img/sprite.svg";
import {
  SignActionsListStyle,
  UserActionsBoxStyle,
  UserInfoBoxStyle,
  UserLoggedInBoxStyle,
} from "./UserActions.styled.";

export const UserActions = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectProfile);

  const openPopUp = (popUp) => {
    dispatch(togglePopUp(popUp));
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
              onClick={() => openPopUp("signIn")}
              text="Log In"
              mv_p="8px 16px"
              tv_p="12px 32px"
              dv_p="14px 40px"
              bg="transparent"
            />
          </li>
          <li>
            <Button
              className={"sign-up"}
              onClick={() => openPopUp("signUp")}
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
    </UserActionsBoxStyle>
  );
};
