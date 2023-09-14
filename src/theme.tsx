import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#3B3840',
      },
      secondary: {
        main: '#BF8E8E',
      },
    },
    typography: {
      fontFamily: 'Inter',
      fontWeightBold: '700',
    //   letterSpacing: '1em'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    }
  });