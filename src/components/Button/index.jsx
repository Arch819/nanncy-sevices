import React from "react";
import { ButtonStyle } from "./Button.styled";

export const Button = ({
  text,
  width,
  mv_p = "12px",
  tv_p = "14px",
  dv_p = "14px",
  bg = "transparent",
  br_c = "#FBFBFB66",
  color = "#FBFBFB",
  onClick,
  type = "button",
  className,
}) => {
  return (
    <ButtonStyle
      className={className}
      onClick={onClick}
      type={type}
      $width={width}
      $mv_p={mv_p}
      $tv_p={tv_p}
      $dv_p={dv_p}
      $bg={bg}
      $br_c={br_c}
      $t_color={color}
    >
      {text}
    </ButtonStyle>
  );
};
