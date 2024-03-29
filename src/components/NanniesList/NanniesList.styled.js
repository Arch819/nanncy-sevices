import styled from "@emotion/styled";

export const NanniesListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  /* max-height: 100%; */
  overflow-y: auto;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
