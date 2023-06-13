import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export function successToast(message) {
    toast.success(message, {
        pauseOnFocusLoss: false, theme: "colored"
    });
}

export function warningToast(message) {
    toast.warning(message, {
        pauseOnFocusLoss: true, theme: "colored"
    });
}

export function errorToast(message) {
    toast.error(message, {
        pauseOnFocusLoss: false, theme: "colored"
    });
}

export function infoToast(message) {
    toast.info(message, {
        pauseOnFocusLoss: true, theme: "colored"
    });
}

export function promiseToast(petition, pendingMessage, successMessage, errorMessage) {
    toast.promise(petition, {
        pending: pendingMessage ? pendingMessage : 'Cargando...',
        success: successMessage ? pendingMessage : 'Listo',
        error: errorMessage ? pendingMessage : 'Error'
    });
}

export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function useThemeDetector() {

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