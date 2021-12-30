import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global"
import DynamicHeader from "./components/DynamicHeader";
import Projects from "./pages/Projects";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = {
    colors: {
        background: '#1B1B20',
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
                        <DynamicHeader big={true}></DynamicHeader>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/projects"}>
                        <DynamicHeader big={false}></DynamicHeader>
                        <Projects></Projects>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/about"}>
                        <DynamicHeader big={false}></DynamicHeader>

                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/contact"}>
                        <DynamicHeader big={false}></DynamicHeader>

                    </Route>
                </Switch>

            </>
        </ThemeProvider>
    </Router>


);
}

export default App;
