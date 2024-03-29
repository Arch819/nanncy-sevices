import React from "react";
import Logo from "../Logo";
import {
  NavLinkStyle,
  NavListStyle,
  NavigationStyle,
} from "./Navigation.styled";

export const Navigation = () => {
  const isLoggedIn = true;
  return (
    <NavigationStyle>
      <Logo />
      <NavListStyle>
        <li>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/nannies">Nannies</NavLinkStyle>
        </li>
        {isLoggedIn && (
          <li>
            <NavLinkStyle to="/favorite">Favorites</NavLinkStyle>
          </li>
        )}
      </NavListStyle>
    </NavigationStyle>
  );
};
