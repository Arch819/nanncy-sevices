import { Slide } from "@mui/material";
import React from "react";
import sprite from "../../img/sprite.svg";

import {
  BtnCloseDialogStyle,
  DialogContentStyle,
  DialogRootStyle,
} from "./DialogComponent.styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  const { children, ...otherProps } = props;
  return (
    <Slide direction="up" ref={ref} {...otherProps}>
      {children}
    </Slide>
  );
});

export const DialogComponent = ({
  children,
  handleClose,
  open,
  fullScreen = false,
  zIndex = "1300",
}) => {
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
        <BtnCloseDialogStyle>
          <svg className="close-icon" width={32} height={32} stroke="#11101C">
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </BtnCloseDialogStyle>
        {children}
      </DialogContentStyle>
    </DialogRootStyle>
  );
};
