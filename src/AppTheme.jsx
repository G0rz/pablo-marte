import {createTheme} from "@mui/material/styles";

export function AppTheme(theme) {
    return createTheme({
        palette: {
            mode: (theme ? 'dark' : 'light'),
            primary: {
                light: '#3f9bf1', main: '#0F82EE', dark: '#0a5ba6', contrastText: '#fff'
            }, secondary: {
                light: '#3eb8e6', main: '#0EA7E0', dark: '#09749c', contrastText: '#fff'
            }, success: {
                light: '#049b4f', main: '#06DE72', dark: '#37e48e', contrastText: ' rgba(0, 0, 0, 0.87)'
            }, error: {
                light: "#e57373", main: "#f44336", dark: "#d32f2f", contrastText: "#fff"
            }
        },
    })
}