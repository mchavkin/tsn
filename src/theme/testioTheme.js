import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9fd533',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
