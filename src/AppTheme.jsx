import {createTheme} from "@mui/material/styles";

export function AppTheme(theme) {
    return createTheme({
        palette: {
            mode: (theme ? 'light' : 'light'),
            background: {
                default: '#2380d1',
            },
            primary: {
                light: '#f29259', main: '#ef732a', dark: '#d55a10', contrastText: '#fff'
            }, secondary: {
                light: '#3eb8e6', main: '#0EA7E0', dark: '#09749c', contrastText: '#fff'
            }, success: {
                light: '#049b4f', main: '#06DE72', dark: '#37e48e', contrastText: ' rgba(0, 0, 0, 0.87)'
            }, error: {
                light: "#e57373", main: "#f44336", dark: "#d32f2f", contrastText: "#fff"
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        background: '#2380d1',
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        background: '#2380d1',
                    },
                },
            },
        },
    })
}