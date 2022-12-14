import { ThemeProvider } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];


const primary = '#222';
const secondary = '#fff';

const theme = {
    fontSizes,
    fonts: {
      primary: 'Raleway',
      secondary: 'Roboto',
    },
    colors: {
      primary,
      secondary,
    },
  };
  
  export type ThemeType = typeof theme;
  
  export const Theme: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };