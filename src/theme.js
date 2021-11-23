import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#039BE5',
    },
    secondary: {
      main: '#43A047',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
  typography: {
    fontFamily: `"Microsoft-Yahei", "Roboto", "Arial"`,
    color: '#424242'
  },
});

export default theme;