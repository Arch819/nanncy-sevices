import styled from "@emotion/styled";

export const NanniesItemStyle = styled.li`
  position: relative;
  display: grid;
  grid-template-areas:
    "a n n"
    "w w w"
    "d d d";
  grid-template-columns: 80px 1fr;
  gap: 10px;
  margin-right: 8px;
  padding: 12px;
  border-radius: 12px;
  background: #fbfbfb;
  @media screen and (min-width: 768px) {
    grid-template-areas:
      "a n w"
      "a n ."
      "a d d";
    grid-template-columns: 100px 1fr;
    gap: 12px;
    padding: 18px;
    border-radius: 32px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 120px 1fr;
    gap: 24px;
    padding: 24px;
  }
`;

export const NannieAvatarBox = styled.div`
  grid-area: a;
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  padding: 4px;
  border: 1px solid #f03f3b33;

  .status {
    position: absolute;
    top: 3px;
    right: 6px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 2px solid #fbfbfb;
    background: #38cd3e;
  }
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    border-radius: 24px;
    padding: 8px;
    .status {
      top: 7px;
      right: 11px;
      width: 14px;
      height: 14px;
    }
    .avatar {
      border-radius: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 120px;
    height: 120px;
    border-radius: 30px;
    padding: 12px;
    .status {
      top: 9px;
      right: 14px;
    }
  }
`;
export const AddToFavoriteBtnStyle = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  .btn-icon {
    stroke: ${(props) => (props.$isFavorite ? "transparent" : "#11101C")};
    fill: ${(props) => (props.$isFavorite ? "#F03F3B" : "transparent")};
  }

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
    .btn-icon {
      width: 26px;
      height: 26px;
    }
  }
  @media screen and (min-width: 1440px) {
    top: 24px;
    right: 24px;
  }
`;

export const NameBoxStyle = styled.div`
  grid-area: n;
  .occupation {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    color: #8a8a89;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color: #11101c;
  }
  @media screen and (min-width: 768px) {
    .occupation {
      font-size: 16px;
    }
    .name {
      font-size: 24px;
    }
  }
`;
export const WorkInfoStyle = styled.ul`
  grid-area: w;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    gap: 4px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 16px;
    margin-right: 98px;
  }
`;
export const WorkInfoItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  .text {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
  }
  .price {
    color: #38cd3e;
  }
  @media screen and (min-width: 1440px) {
    gap: 8px;
    .icon {
      width: 16px;
      height: 16px;
    }
    .text {
      font-size: 16px;
    }
  }
`;

export const BetweenDecorIconStyle = styled.li`
  width: 1px;
  height: 100%;
  background: #11101c33;
`;

export const DetailInfoStyle = styled.div`
  grid-area: d;
`;

export const DetailInfoListStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const DetailInfoItemStyle = styled.li`
  padding: 6px 12px;
  background: #f3f3f3;
  border-radius: 10px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: #8a8a89;
  .value {
    color: #11101c;
  }
  .value.age {
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    border-radius: 24px;
    line-height: 1.5;

    font-size: 16px;
  }
`;

export const AboutTextStyle = styled.p`
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.25;
  color: #11101c80;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ReviewsListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;
export const ReviewerInfoBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  .avatar {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #f03f3b33;

    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color: #f03f3b;
  }
  .name {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
    color: #11101c;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.28;
    color: #11101c;
  }
  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-bottom: 18px;

    .avatar {
      width: 44px;
      height: 44px;

      font-size: 20px;
    }
    .name {
      font-size: 16px;
    }
    .rating {
      gap: 8px;
      font-size: 14px;
    }
    .rating-icon {
      width: 16px;
      height: 16px;
    }
  }
`;
export const ReviewerCommentBoxStyle = styled.p`
  font-size: 12px;
  line-height: 1.25;
  color: #11101c;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ReadMoreBtnStyle = styled.button`
  background: transparent;
  border: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #11101c;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
