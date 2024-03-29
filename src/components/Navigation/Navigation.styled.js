import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const NavListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavLinkStyle = styled(NavLink)`
  position: relative;
  display: block;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 1.25;
  color: #fbfbfb;
  text-decoration: none;
  overflow-y: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(150%);
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #ffffff;
    transition: transform var(--transition);
  }

  &.active::after {
    transform: translateX(-50%);
  }
`;
