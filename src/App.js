import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global"
import DynamicHeader from "./components/DynamicHeader";
import Projects from "./pages/Projects";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = {
    colors: {
        background: '#15151B',
        backgroundTrans: '#15151B00', 
        pink: '#FF49A1',
        cyan: '#51F5FF',
    },
    font: {
        cyber: 'Orbitron',
        mono: 'Overpass Mono',
    },
}

function App() {
return (
    <Router>
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                <Switch>
                    <Route exact path={"/"}>
                        <DynamicHeader big={true} current='home'></DynamicHeader>
                        <LandingPage></LandingPage>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/projects"}>
                        <DynamicHeader big={false} current='project'></DynamicHeader>
                        <Projects></Projects>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/about"}>
                        <DynamicHeader big={false} current='about'></DynamicHeader>
                        <About></About>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/contact"}>
                        <DynamicHeader big={false} current='contact'></DynamicHeader>
                    </Route>
                </Switch>

            </>
        </ThemeProvider>
    </Router>


);
}

export default App;
