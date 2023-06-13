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
import {useThemeDetector} from "./components/tools/tools";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Gallery from "./pages/Gallery/Gallery";
import Music from "./pages/Music/Music";

const navlinks = [{title: 'Musica', path: '/music'}, {title: 'Acerca de Mí', path: '/about-me'}, {
    title: 'Pablo Marte',
    path: '/'
}, {title: 'Contacto', path: '/contact'}, {title: 'Galería', path: '/gallery'}]

function App() {
    const isDarkTheme = useThemeDetector();
    const [mode, setMode] = useState(isDarkTheme)
    const themeMode = localStorage.getItem("Mode");

    const setThemeMode = () => {
        if (themeMode === undefined || themeMode === null) {
            return localStorage.setItem("Mode", mode);
        } else {
            return setMode(JSON.parse(themeMode));
        }
    }

    useEffect(setThemeMode);
    const changeTheme = (themeMode) => {
        setMode(!themeMode)
        localStorage.setItem('Mode', !themeMode);
    }

    return (<ThemeProvider theme={AppTheme(mode)}>
        <ToastContainer autoClose={8000} closeOnClick/>
        <BrowserRouter>
            <CssBaseline/>
            <Container mode={mode} changeTheme={changeTheme} navlinks={navlinks}>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about-me'} element={<AboutMe/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/gallery'} element={<Gallery/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'*'} element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </ThemeProvider>);

}

export default App;