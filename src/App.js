import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global"
import DynamicHeader from "./components/DynamicHeader";
import Projects from "./pages/Projects";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import TopSeed from "./pages/Projects/subdirectory/TopSeed";

// const theme = {
//     colors: {
//         background: '#15151B',
//         backgroundTrans: '#15151B00', 
//         pink: '#FF49A1',
//         cyan: '#51F5FF',
//         neonGreen: '#87FFDB',
//     },
//     font: {
//         cyber: 'Orbitron',
//         mono: 'Overpass Mono',
//         inter: 'Inter', 
//     },
// }

function App() {
return (

    // <ThemeProvider theme={{}}>
        <>
            <GlobalStyles />

            <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
                    {/* <DynamicHeader big={true} current='home'></DynamicHeader>
                    <LandingPage></LandingPage> */}
            
            
                <Route path="/projects" >
                    <Route index element={<Projects/>}/>
                    <Route path='topseedui' element={<TopSeed/>}/>
                    {/* <DynamicHeader big={false} current='project'></DynamicHeader> */}
                    
                </Route>
            
            
                {/* <Route path={"/projects/topseedui"}>
                    <TopSeedUI></TopSeedUI>
                </Route> */}
            
            
                <Route path={"/about"} element={<About/>}>
                    {/* <DynamicHeader big={false} current='about'></DynamicHeader> */}
                </Route>
            
            
                <Route path={"/contact"} element={<Contact/>}>
                    {/* <DynamicHeader big={false} current='contact'></DynamicHeader> */}

                </Route>
            </Routes>
            

            
            
        </>
    // </ThemeProvider>



);
}

export default App;
