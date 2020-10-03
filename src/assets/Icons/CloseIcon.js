import React from "react";
import styled from "styled-components";

export const IconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;
export const CloseIcon = () => (
  <IconWrapper aria-hidden="true" viewBox="0 0 20 20">
    <path
      d="M11 9.6L18.9 1.7C19.3 1.3 19.3 0.7 18.9 0.3C18.5 -0.1 17.9 -0.1 17.5 0.3L9.6 8.2L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.2 9.6L0.3 17.5C-0.1 17.9 -0.1 18.5 0.3 18.9C0.5 19.1 0.8 19.2 1 19.2C1.2 19.2 1.5 19.1 1.7 18.9L9.6 11L17.5 18.9C17.7 19.1 18 19.2 18.2 19.2C18.4 19.2 18.7 19.1 18.9 18.9C19.3 18.5 19.3 17.9 18.9 17.5L11 9.6Z"
      fill="#4A4B53"
    />
  </IconWrapper>
);
