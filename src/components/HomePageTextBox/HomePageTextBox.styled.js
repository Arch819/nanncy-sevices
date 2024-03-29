import styled from "@emotion/styled";
import { ButtonStyle } from "../Button/Button.styled";
import { Link } from "react-router-dom";

export const TextBoxStyle = styled.div`
  align-content: center;
  color: #fbfbfb;
`;

export const HomePageTitleStyle = styled.h1`
  margin-bottom: 18px;

  font-size: 44px;
  font-weight: 500;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    margin-bottom: 28px;
  }
`;

export const UnderTitleTextStyle = styled.p`
  margin-bottom: 40px;
  font-size: 22px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 28px;
  }
`;

export const GetStartedLinkStyle = styled(ButtonStyle.withComponent(Link))`
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 12px 30px;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -1.1px;
  color: #fbfbfb;
  text-decoration: none;
  word-wrap: none;

  .link-icon {
    fill: currentColor;
  }
  &:hover .link-icon {
    transform: rotate(52deg);
  }

  @media screen and (min-width: 768px) {
    max-width: 230px;
    padding: 18px 50px;
    font-size: 20px;
  }
`;
