import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const SignFormTitleStyle = styled.h2`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 48px;
  }
`;

export const SignFormDescTextStyle = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

export const SignFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
};

export const SignFormInputStyle = styled(TextField)`
  width: 100%;
  border: none;
  .MuiInputBase-root {
    border-radius: 12px;
    border-color: #11101c1a;
  }
  .MuiInputLabel-root {
    font-family: inherit;
    font-size: 14px;
    line-height: 1.25;
  }

  .MuiInputBase-input {
    padding: 12px 46px 12px 14px;
  }
  @media screen and (min-width: 768px) {
    .MuiInputBase-root {
      border: none;
      border-radius: 16px;
      border-color: #11101c1a;
    }
    .MuiInputLabel-root {
      font-size: 16px;
    }

    .MuiInputBase-input {
      padding: 16px 60px 16px 18px;
    }
  }
`;

export const PasswordInputBoxStyle = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordEyesBtnStyle = styled.button`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px 12px 0;
  margin: 0;
  background-color: transparent;
  border: none;
  color: #11101c;
  svg {
    stroke: currentColor;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 18px 0;
    svg {
      width: 24;
      height: 24;
    }
  }
`;
