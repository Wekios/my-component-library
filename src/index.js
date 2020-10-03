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
    <SecondaryButton modifiers="large">Bye world</SecondaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
      Large warning
    </SecondaryButton>
    <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
      Hmm world
    </TertiaryButton>
  </React.StrictMode>,
  document.getElementById("root")
);
