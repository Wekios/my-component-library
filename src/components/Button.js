import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
`,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
`,
  warning: () => `
  background: none;
  color: ${defaultTheme.status.warningColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.warningColorHover};
    outline: 3px solid ${defaultTheme.status.warningColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${defaultTheme.status.warningColorActive};
  }
`,
  primaryButtonWarning: () => `
  background-color: ${defaultTheme.status.warningColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonWarning: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`,
  error: () => `
  background: none;
  color: ${defaultTheme.status.errorColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.errorColorHover};
    outline: 3px solid ${defaultTheme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
`,
  primaryButtonError: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonError: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`,
  success: () => `
  background: none;
  color: ${defaultTheme.status.successColor};
  &:hover, &:focus {
    background-color: ${defaultTheme.status.successColorHover};
    outline: 3px solid ${defaultTheme.status.successColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${defaultTheme.status.successColorActive};
  }
`,
  primaryButtonSuccess: () => `
  background-color: ${defaultTheme.status.successColor};
  color: ${defaultTheme.textColorInverted};
`,
  secondaryButtonSuccess: () => `
  border: 2px solid ${defaultTheme.status.warningColor};
`,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  border: none;
  transition: background-color 200ms linear, color 200ms linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    background-color: ${defaultTheme.primaryFocusColor};
    color: ${defaultTheme.textColorOnPrimary};
    outline: 3px solid ${defaultTheme.primaryFocusOutline};
    outline-offset: 2px;
  }

  &:active {
    color: ${defaultTheme.textColorOnPrimary};
    background-color: ${defaultTheme.primaryActiveColor};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:disabled {
    background-color: ${defaultTheme.primaryDisabledColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnSecondary};

  &:disabled {
    border-color: ${defaultTheme.borderColorOnSecondaryDisabled};
    color: ${defaultTheme.textColorOnSecondaryDisabled};
    cursor: not-allowed;
    background: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.textColorOnTertiary};

  &:disabled {
    background: none;
    color: ${defaultTheme.textColorOnTertiaryDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
