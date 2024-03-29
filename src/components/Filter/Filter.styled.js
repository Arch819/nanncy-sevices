import styled from "@emotion/styled";
import { MenuItem, Select } from "@mui/material";

export const FilterContainerStyle = styled.div`
  margin-top: auto;
  margin-bottom: 32px;
`;

export const FilterLabelStyle = styled.label`
  width: 300px;
  display: flex;
  flex-direction: column;
  .label-text {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: #8a8a89;
  }
  .select-icon {
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);
    cursor: pointer;
    pointer-events: none;
  }
`;

export const FilterSelectStyle = styled(Select)`
  width: 226px;
  position: relative;
  background: #f03f3b;
  border-color: transparent;
  border-radius: 14px;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: #fbfbfb;
  .MuiSelect-select.MuiSelect-outlined {
    padding: 14px 18px;
    min-height: auto;
  }
`;

export const MenuItemStyle = styled(MenuItem)`
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.1;
  color: #11101c4d;
  &.selected-item {
    color: #11101c;
  }
`;
