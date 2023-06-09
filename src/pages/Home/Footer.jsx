import {Grid, Link} from "@mui/material";

const Footer = () => {
    return (<Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={12}>
           <small> Copyright © {new Date().getFullYear()} <Link component={'a'} href={'https://github.com/G0rz'} color={'primary'} underline={'none'} target="_blank" rel="noopener noreferrer">G0rz</Link> All rights reserved.</small>
        </Grid>
    </Grid>);
};

export default Footer;
