import styled from "@emotion/styled";
import bg_home from "../../img/bg_home.jpg";

export const HomeSectionStyle = styled.section`
  height: calc(100dvh - 16px);
  background: #f03f3b;
  background-image: url(${bg_home});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  border-radius: 16px;
  margin: 8px;
  @media screen and (min-width: 768px) {
    height: calc(100dvh - 64px);
    margin: 32px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 30px;
    background-position: right;
    background-size: 50% 100%;
  }
`;

export const HomeContainerStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (min-width: 1440px) {
    padding-right: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
