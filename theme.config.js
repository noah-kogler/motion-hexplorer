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
          background: "url('/background.png')",
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1A1A1A',
        },
        a: {
          color: '#333333',
        }
      }
    },
  },
});
