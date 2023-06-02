import {createTheme} from "@mui/material/styles";

let colorBarra = "#0F82EE";
let colorBarraHover = "#3eb8e6";
let colorBackBarra = "#3f9bf1";

export function AppTheme(colorTema) {

    const Tema = createTheme({
        palette: {
            mode: (colorTema ? 'dark' : 'light'),
            primary: {
                light: '#3f9bf1', main:'#0F82EE', dark:'#0a5ba6', contrastText: '#fff'
            }, secondary: {
                light: '#3eb8e6', main:'#0EA7E0', dark:'#09749c',  contrastText: '#fff'
            }, success: {
                light: '#049b4f', main: '#06DE72', dark: '#37e48e', contrastText: ' rgba(0, 0, 0, 0.87)'
            }, error: {
                light: "#e57373", main: "#f44336", dark: "#d32f2f", contrastText: "#fff"
            }
        }, overrides: {
            MuiCssBaseline: {
                "@global": {
                    body: {
                        scrollbarColor: colorBarra + " " + colorBarraHover,
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            backgroundColor: colorBackBarra,
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                            borderRadius: 8,
                            backgroundColor: colorBarra,
                            minHeight: 24,
                            border: "3px solid " + colorBarra,
                        },
                        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                            backgroundColor: colorBackBarra,
                        },
                        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                            backgroundColor: colorBackBarra,
                        },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: colorBarraHover,
                        },
                        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                            backgroundColor: colorBackBarra,
                        },
                        margin: 0,
                        padding: 0
                    },
                },
            },
        }
    })

    return Tema
}