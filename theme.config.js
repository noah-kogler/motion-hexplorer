import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#292F36',
    },
    secondary: {
      main: '#D1D7DB',
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
          color: '#292F36',
          background: "url('/background.png')",
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1A1A1A',
        },
        a: {
          color: '#292F36',
        },
        h2: {
          fontFamily: "'M PLUS Rounded 1c', sans-serif",
          fontSize: "1.2rem"
        }
      }
    },
  },
});
