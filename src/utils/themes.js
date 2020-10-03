import { blue, neutral, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[400],
  primaryHoverColor: blue[200],
  primaryFocusColor: blue[300],
  primaryFocusOutline: blue[100],
  primaryActiveColor: blue[100],
  primaryDisabledColor: neutral[400],
  textColorOnPrimary: neutral[100],

  textColorOnSecondary: blue[300],
  textColorOnSecondaryDisabled: neutral[400],
  borderColorOnSecondaryDisabled: neutral[400],

  textColorOnTertiary: blue[500],
  textColorOnTertiaryDisabled: neutral[400],

  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
