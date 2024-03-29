import React from "react";
import { Navigation } from "../Navigation";
import { UserActions } from "../UserActions";
import { HeaderContainerStyle, HeaderStyle } from "./Header.styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderStyle className={pathname === "/" ? "on_home" : ""}>
      <HeaderContainerStyle className="container">
        <Navigation />
        <UserActions />
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};
