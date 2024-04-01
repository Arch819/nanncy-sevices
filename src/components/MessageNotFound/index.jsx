import React from "react";
import { MessageTextStyle } from "./MessageNotFounde.styled";

const MessageNotFound = ({ message = "Nothing found" }) => {
  return <MessageTextStyle>{message}</MessageTextStyle>;
};

export default MessageNotFound;
