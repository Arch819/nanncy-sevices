import styled from "@emotion/styled";

export const TitleStyle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #11101c;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const MessageStyle = styled.p`
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 1.5;
  color: #11101c;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ActionsListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
