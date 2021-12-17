import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global"

const theme = {
  colors: {
    background: '#1B1B20',
    neonPink: '#FF49A1',
    neonTeal: '#51F5FF',
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <LandingPage></LandingPage>
      </>
    </ThemeProvider>
    
  );
}

export default App;
