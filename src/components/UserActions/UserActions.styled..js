import styled from "@emotion/styled";

export const UserActionsBoxStyle = styled.div`
  margin-right: 0;
`;

export const UserLoggedInBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const UserInfoBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  .user-avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #fbfbfb;
  }
  .avatar-icon {
    fill: #f03f3b;
  }

  .user-name {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const SignActionsListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;
