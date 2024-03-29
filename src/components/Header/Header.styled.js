import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  background: #f03f3b;
  color: #fbfbfb;

  &.on_home {
    position: fixed;
    top: 8px;
    left: 0;
    right: 0;
    background: transparent;
    border-bottom: 1px solid #fbfbfb66;
  }
  @media screen and (min-width: 768px) {
    &.on_home {
      top: 32px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.on_home .sign-up {
      background-color: #f03f3b;
      color: #fbfbfb;
    }
  }
`;

export const HeaderContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 1440px) {
    gap: 92px;
  }
`;
