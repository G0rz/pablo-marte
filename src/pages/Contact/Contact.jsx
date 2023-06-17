import {Helmet} from "react-helmet-async";
import {Image} from 'mui-image';
import ContactImage from '../../assets/images/Contact.webp'
import {Grid, Typography, Link} from "@mui/material";

const Contact = () => {


    return (
        <>
            <Helmet>
                <title>Pablo Marte - Contact</title>
            </Helmet>
            <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>

                <Grid item xs={12} sx={{my: 4}}>
                    <Typography variant={'h3'} component={'h1'}>
                        Contacto
                    </Typography>
                </Grid>
                <Grid item sx={{maxWidth: 850, width: {xs: '65vw', md: '35vw'}, my: 2}}>
                    <Image
                        src={ContactImage}
                        alt={'Lo más nuevo'}
                        height="100%"
                        width="100%"
                        errorIcon={true}
                        sx={{cursor: 'pointer'}}
                    />
                </Grid>
                <Grid item xs={12} sx={{my: 4}}>
                    <Typography variant={'h6'} component={'p'} color={'inherit'}>
                        Management | <Typography variant={'h6'} component={Link} href="mailto: pablomarte37@gmail.com"
                                                 underline={'none'} color={'inherit'}>
                        pablomarte37@gmail.com
                    </Typography>
                    </Typography>

                </Grid>
            </Grid>
        </>
    );
};

export default Contact;