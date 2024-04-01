import React from "react";
import { ButtonStyle } from "./Button.styled";

export const Button = ({
  text,
  children,
  width,
  mv_p = "8px 12px",
  tv_p = "14px 30px",
  dv_p = "14px",
  bg = "#F03F3B",
  br_c = "#FBFBFB66",
  color = "#FBFBFB",
  center = false,
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
      $center={center}
    >
      {text}
      {children}
    </ButtonStyle>
  );
};
