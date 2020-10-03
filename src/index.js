import React from "react";
import ReactDOM from "react-dom";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
import { GlobalStyle } from "./utils";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <PrimaryButton modifiers={["small", "warning"]}>
      Small warning
    </PrimaryButton>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton modifiers="large">Bye world</SecondaryButton>
    <SecondaryButton modifiers={["large", "warning"]}>
      Large warning
    </SecondaryButton>
    <TertiaryButton modifiers="small">Hmm world</TertiaryButton>
  </React.StrictMode>,
  document.getElementById("root")
);
