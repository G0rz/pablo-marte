import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";

export const ErrorPage = () => {

    return (<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Grid item xs={12}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </Grid>
        <Grid item xs={12}>
            <Button component={NavLink} to={'/'} color={'primary'} variant={'contained'}>Regresar al Inicio</Button>
        </Grid>
    </Grid>);
};
