import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {

    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/");
    }

    return (<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Grid item xs={12}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </Grid>
        <Grid item xs={12}>
            <Button variant={'outlined'} onClick={handleRedirect}>Regresar al Inicio</Button>
        </Grid>
    </Grid>);
};
