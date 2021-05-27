import { createMuiTheme } from "@material-ui/core/styles";

const mainBlue = "#001F3D";
const mainYellow = "#EBAC26";
const mainDarkBlue = "#060B2D"
const mainGray = "#9195B3"
export default createMuiTheme({
  palette: {
    common: {
      blue: `${mainBlue}`,
      yellow: `${mainYellow}`,
      darkBlue:`${mainDarkBlue}`,
      darkGray:`${mainGray}`
    },
    primary: {
      main: `${mainBlue}`,
    },
    secondary: {
      main: `${mainYellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
});