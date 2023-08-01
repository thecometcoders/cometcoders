import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.component";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  spacing: 20,  // spacing in px
  /* other theme customizations */
  palette: {
    primary: {
      main: "rgba(35, 168, 209, 1)"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        primary: {
          fontFamily: "orbitron-black",
          fontSize: "3em"
        },
        subheading: {
          fontFamily: "orbitron-black",
          fontSize: "1em"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          padding: '16px 0',
        },
      },
    },
  },




});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          {/*<Route path="audio-classes" element={<AudioClasses />} />*/}
          {/*<Route path="yoga-poses" element={<YogaPoses />} />*/}
          {/*<Route path="about" element={<About />} />*/}
          {/*<Route path="sign-in" element={<SingInPopup />} />*/}
          {/*<Route path="sign-up" element={<SingUpPopup />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
