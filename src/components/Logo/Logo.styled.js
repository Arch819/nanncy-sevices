import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoLinkStyle = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.16;
  color: #fbfbfb;
  text-decoration: none;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
