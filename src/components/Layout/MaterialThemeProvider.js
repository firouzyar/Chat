import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme(

  {
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#b122e0",
      },
      white: {
        main: "#fff",
      },
      error: {
        main: "#f018a6",
      }
    },
    props: {
      MuiButtonBase: {
        disableRipple: false 
      },
      MuiPopover: {
        elevation: 1
      }
    }
  }
);

function MaterialThemeProvider(props) {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default MaterialThemeProvider;