import {toast} from "react-toastify";

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