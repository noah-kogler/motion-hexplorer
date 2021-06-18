import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  headerHeight: '7rem',
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          margin: '0',
          padding: '0',
        },
        body: {
          height: '100%',
          width: '100%',
          margin: '0',
          padding: '0',
          fontFamily: "'Roboto', sans-serif",
        },
        a: {
          color: '#333333',
        }
      }
    },
  },
});
