import {Grid} from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Container = ({children, navlinks}) => {

    return (<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Navbar navlinks={navlinks}/>
        {children}
        <Footer/>
    </Grid>);
};

export default Container;
