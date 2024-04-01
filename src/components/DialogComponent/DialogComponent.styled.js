import styled from "@emotion/styled";
import { Dialog, DialogContent } from "@mui/material";

export const DialogRootStyle = styled(Dialog)`
  .MuiDialog-paper {
    background: transparent;
    border-radius: 16px;
  }
  @media screen and (min-width: 1440px) {
    .MuiDialog-paper {
      border-radius: 30px;
    }
  }
`;

export const DialogContentStyle = styled(DialogContent)`
  max-width: 100%;
  background: #fbfbfb;
  border-radius: 16px;
  padding: 20px 10px;
  @media screen and (min-width: 768px) {
    max-width: 566px;
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 64px;
    border-radius: 30px;
  }
`;

export const BtnCloseDialogStyle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  @media screen and (min-width: 768px) {
    .close-icon {
      width: 32px;
      height: 32px;
    }
  }
  @media screen and (min-width: 1440px) {
    top: 20px;
    right: 20px;
  }
`;
