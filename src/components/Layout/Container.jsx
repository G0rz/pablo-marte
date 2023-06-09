import {Grid} from "@mui/material";
import Navbar from "./Navbar/Navbar";

const Container = ({children, mode, changeTheme}) => {

    return (<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Navbar mode={mode} changeTheme={changeTheme}/>
        {children}
    </Grid>);
};

export default Container;
