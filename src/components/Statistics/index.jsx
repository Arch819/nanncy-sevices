import React from "react";
import sprite from "../../img/sprite.svg";
import {
  StatisticTextBoxStyle,
  StatisticsBoxStyle,
  StatisticIconBoxStyle,
  StatisticsItemStyle,
  StatisticsListStyle,
} from "./Statistics.styled";

export const Statistics = () => {
  return (
    <StatisticsBoxStyle>
      <StatisticsListStyle>
        <StatisticsItemStyle>
          <StatisticIconBoxStyle>
            <svg width={30} height={30} fill="#ffffff">
              <use href={`${sprite}#icon-fe_check`}></use>
            </svg>
          </StatisticIconBoxStyle>
          <StatisticTextBoxStyle>
            <p className="title">Experienced nannies</p>
            <p className="value">15,000</p>
          </StatisticTextBoxStyle>
        </StatisticsItemStyle>
        <StatisticsItemStyle>
          <StatisticIconBoxStyle>
            <svg width={30} height={30} fill="#ffffff">
              <use href={`${sprite}#icon-fe_check`}></use>
            </svg>
          </StatisticIconBoxStyle>
          <StatisticTextBoxStyle>
            <p className="title">Appointed meetings</p>
            <p className="value">+300,000</p>
          </StatisticTextBoxStyle>
        </StatisticsItemStyle>
        <StatisticsItemStyle>
          <StatisticIconBoxStyle>
            <svg width={30} height={30} fill="#ffffff">
              <use href={`${sprite}#icon-fe_check`}></use>
            </svg>
          </StatisticIconBoxStyle>
          <StatisticTextBoxStyle>
            <p className="title">Registered users</p>
            <p className="value">+100,000</p>
          </StatisticTextBoxStyle>
        </StatisticsItemStyle>
      </StatisticsListStyle>
    </StatisticsBoxStyle>
  );
};
