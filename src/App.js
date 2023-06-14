import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {AppTheme} from './AppTheme'
import {ErrorPage} from "./components/Layout/ErrorPageNotFound";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import Container from "./components/Layout/Container";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Gallery from "./pages/Gallery/Gallery";
import Nightingale from "./pages/Music/Nightingale";
import LeñaAlFuego from "./pages/Music/LeñaAlFuego";
import Luminiscencia from "./pages/Music/Luminiscencia";
import Paisaje from "./pages/Music/Paisaje";
import Petricor from "./pages/Music/Petricor";
import TiempoDeQuerer from "./pages/Music/TiempoDeQuerer";

const navlinks = [{title: 'MÚSICA', path: '/music'}, {title: 'Acerca de Mí', path: '/about-me'}, {
    title: 'Pablo Marte',
    path: '/'
}, {title: 'Contacto', path: '/contact'}, {title: 'Galería', path: '/gallery'}]

function App() {

    const [mode, setMode] = useState(true)
    const themeMode = localStorage.getItem("Mode");

    const setThemeMode = () => {
        if (themeMode === undefined || themeMode === null) {
            return localStorage.setItem("Mode", mode);
        } else {
            return setMode(JSON.parse(themeMode));
        }
    }

    useEffect(setThemeMode);

    return (<ThemeProvider theme={AppTheme(mode)}>
        <ToastContainer autoClose={8000} closeOnClick/>
        <BrowserRouter>
            <CssBaseline/>
            <Container navlinks={navlinks}>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about-me'} element={<AboutMe/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/gallery'} element={<Gallery/>}/>
                        <Route path={'/leña-al-fuego'} element={<LeñaAlFuego/>}/>
                        <Route path={'/luminiscencia'} element={<Luminiscencia/>}/>
                        <Route path={'/nightingale'} element={<Nightingale/>}/>
                        <Route path={'/paisaje'} element={<Paisaje/>}/>
                        <Route path={'/petricor'} element={<Petricor/>}/>
                        <Route path={'/tiempo-de-querer'} element={<TiempoDeQuerer/>}/>
                        <Route path={'*'} element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </ThemeProvider>);

}

export default App;