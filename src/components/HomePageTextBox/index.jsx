import React from "react";
import sprite from "../../img/sprite.svg";
import {
  GetStartedLinkStyle,
  HomePageTitleStyle,
  TextBoxStyle,
  UnderTitleTextStyle,
} from "./HomePageTextBox.styled";

const HomePageTextBox = () => {
  return (
    <TextBoxStyle>
      <HomePageTitleStyle>Make Life Easier for the Family:</HomePageTitleStyle>
      <UnderTitleTextStyle>
        Find Babysitters Online for All Occasions
      </UnderTitleTextStyle>
      <GetStartedLinkStyle to="/nannies">
        Get started
        <svg width={18} height={18} className="link-icon">
          <use href={`${sprite}#icon-arrow-top-right`}></use>
        </svg>
      </GetStartedLinkStyle>
    </TextBoxStyle>
  );
};

export default HomePageTextBox;
