import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <React.StrictMode>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
          onClick={() => setUseDarkTheme((dt) => !dt)}
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        >
          Toggle theme
        </button>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100wv",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SignUpModal />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
