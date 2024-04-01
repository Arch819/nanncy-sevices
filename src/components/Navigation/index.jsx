import React from "react";
import Logo from "../Logo";
import {
  NavLinkStyle,
  NavListStyle,
  NavigationStyle,
} from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
