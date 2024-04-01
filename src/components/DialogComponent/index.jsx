import { Slide } from "@mui/material";
import React from "react";
import sprite from "../../img/sprite.svg";

import {
  BtnCloseDialogStyle,
  DialogContentStyle,
  DialogRootStyle,
} from "./DialogComponent.styled";
import { useSelector } from "react-redux";
import { selectPopUp } from "../../redux/appState/appStateSelectors";
import { SignInForm } from "../forms/SignInForm";
import { SignUpForm } from "../forms/SignUpForm";
import { NotAuthorized } from "../PopUp/NotAuthorized";
import { OrderForm } from "../forms/OrderForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  const { children, ...otherProps } = props;
  return (
    <Slide direction="up" ref={ref} {...otherProps}>
      {children}
    </Slide>
  );
});

export const DialogComponent = ({
  handleClose,
  open,
  fullScreen = false,
  zIndex = "1300",
}) => {
  const popUp = useSelector(selectPopUp);
  const visiblePopUp = () => {
    switch (popUp) {
      case "signIn":
        return <SignInForm />;
      case "signUp":
        return <SignUpForm />;
      case "order":
        return <OrderForm />;
      case "notAuthorized":
        return <NotAuthorized />;
      default:
        return;
    }
  };

  return (
    <DialogRootStyle
      open={open}
      fullScreen={fullScreen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      TransitionComponent={Transition}
      sx={{ zIndex: zIndex }}
    >
      <DialogContentStyle>
        <BtnCloseDialogStyle onClick={handleClose}>
          <svg className="close-icon" width={20} height={20} stroke="#11101C">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </BtnCloseDialogStyle>
        {visiblePopUp()}
      </DialogContentStyle>
    </DialogRootStyle>
  );
};
