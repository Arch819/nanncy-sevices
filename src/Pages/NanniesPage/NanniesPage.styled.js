import styled from "@emotion/styled";

export const NanniesContainerStyle = styled.div`
  display: grid;
  grid-template-rows: 140px 1fr;
  @media screen and (min-width: 1440px) {
    grid-template-rows: 170px 1fr;
    padding-bottom: 32px;
  }
`;
