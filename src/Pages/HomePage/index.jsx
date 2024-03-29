import React from "react";
import { Statistics } from "../../components/Statistics";
import { HomeContainerStyle, HomeSectionStyle } from "./HomePage.styled";
import HomePageTextBox from "../../components/HomePageTextBox";

export const HomePage = () => {
  return (
    <HomeSectionStyle>
      <HomeContainerStyle className="container">
        <HomePageTextBox />
        <Statistics />
      </HomeContainerStyle>
    </HomeSectionStyle>
  );
};
