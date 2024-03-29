import React from "react";
import { LogoLinkStyle } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLinkStyle to="/" className="logo-link">
      Nanny.Services
    </LogoLinkStyle>
  );
};

export default Logo;
