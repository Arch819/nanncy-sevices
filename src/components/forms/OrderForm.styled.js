import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const TitleFormStyle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const DescFormStyle = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.25;
`;

export const NannyBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

export const NannyAvatarStyle = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 16px;
`;

export const OccupationStyle = styled.p`
  margin-bottom: 4px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
export const NameNannyStyle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const OrderFormStyle = styled.form`
  display: flex;
  align-items: center;
  gap: 16px 8px;
  flex-wrap: wrap;
`;

export const TextFieldStyle = styled(TextField)`
  .MuiFormLabel-root {
    font-size: 16px;
    line-height: 1.25;
    color: #11101c;
  }
  .MuiInputBase-root {
    border-radius: 12px;
    border-color: #11101c1a;
  }
  input {
    padding: 16px 18px;
    font-size: 16px;
    line-height: 1.25;
    color: #11101c;
  }
  &.address,
  &.phone,
  &.childs-age,
  &.meeting-time {
    flex-basis: calc((100% - 8px) / 2);
  }
`;

export const SubmitBtnStyle = styled.button`
  width: 100%;
`;
