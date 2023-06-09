import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export function successToast(mensaje) {
    toast.success(mensaje, {
        pauseOnFocusLoss: false, theme: "colored", toastId: `success-${1}`
    });
}

export function warningToast(mensaje) {
    toast.warning(mensaje, {
        pauseOnFocusLoss: false, theme: "colored", toastId: `incorrecto-sel${1}`
    });
}

export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function useThemeDetector () {

    //For make a test implement in some component:
    // const isDarkTheme = useThemeDetector();
    // <p>Current Theme is: {isDarkTheme ? "dark": "light"}</p>
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}