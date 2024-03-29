import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
  width: ${(props) => props.$width};
  padding: ${(props) => props.$mv_p};
  background: ${(props) => props.$bg};
  border: 1px solid;
  border-color: ${(props) => props.$br_c};
  border-radius: 12px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.$t_color};

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.$tv_p};
    border-radius: 30px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    padding: ${(props) => props.$dv_p};
  }
`;
