import styled from "@emotion/styled";

export const StatisticsBoxStyle = styled.div`
  align-content: end;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const StatisticsListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StatisticsItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
  padding: 12px;
  background: #fbfbfb;
  border-radius: 12px;
  &:nth-child(2n) {
    margin-right: 0;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 32px;
  }
`;

export const StatisticIconBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  background: #f03f3b;

  @media screen and (min-width: 768px) {
    padding: 12px;
    border-radius: 13px;
  }
`;

export const StatisticTextBoxStyle = styled.div`
  .title {
    margin-bottom: 2px;
    font-size: 12px;
    color: #11101c80;
  }

  .value {
    font-size: 14px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    .title {
      margin-bottom: 6px;
      font-size: 16px;
    }

    .value {
      font-size: 24px;
    }
  }
`;
