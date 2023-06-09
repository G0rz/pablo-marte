import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {AppTheme} from './AppTheme'
import {ErrorPage} from "./components/Layout/ErrorPageNotFound";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import Container from "./components/Layout/Container";
import Home from "./pages/Home";
import {useThemeDetector} from "./components/tools/tools";

function App() {
    const isDarkTheme = useThemeDetector();
    const [mode, setMode] = useState(isDarkTheme)

    useEffect(() => {
        const themeMode = localStorage.getItem("Mode");
        if (themeMode === undefined || themeMode === null) {
            localStorage.setItem("Mode", mode);
        } else {
            setMode(JSON.parse(themeMode));
        }
    }, [])

    const changeTheme = (themeMode) => {
        setMode(!themeMode)
        localStorage.setItem('Mode', !themeMode);
    }

    return (<ThemeProvider theme={AppTheme(mode)}>
        <ToastContainer autoClose={5000} closeOnClick/>
        <BrowserRouter>
            <CssBaseline/>
            <Container mode={mode} changeTheme={changeTheme}>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'*'} element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </ThemeProvider>);

}

export default App;