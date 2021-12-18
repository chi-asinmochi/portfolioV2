import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global"
import Projects from "./pages/Projects";

const theme = {
  colors: {
    background: '#1B1B20',
    pink: '#FF49A1',
    cyan: '#51F5FF',
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        {/* <LandingPage></LandingPage> */}
        <Projects></Projects>
      </>
    </ThemeProvider>
    
  );
}

export default App;
