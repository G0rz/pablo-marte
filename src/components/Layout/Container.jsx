import {Grid} from "@mui/material";

const Container = ({children}) => {

    return (<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        {children}
    </Grid>);
};

export default Container;
