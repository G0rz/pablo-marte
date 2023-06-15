import {Helmet} from "react-helmet-async";
import {Image} from 'mui-image';
import ContactImage from '../../assets/images/Contact.webp'
import {Button, Grid, Typography} from "@mui/material";
const Contact = () => {


    return (
        <>
            <Helmet>
                <title>Pablo Marte - Contact</title>
            </Helmet>
           <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
               <Grid item>
                   <Image
                       src={ContactImage}
                       height="750px"
                       width="500px"
                       duration={
                           3000
                       }
                       easing="cubic-bezier(0.7, 0, 0.6, 1)"
                       showLoading={false}
                       errorIcon={true}
                       shift="null"
                       distance="100px"
                       shiftDuration={
                           900
                       }
                       bgColor="inherit"
                   />
               </Grid>
               <Grid item xs={12} sx={{my: 4}}>
                   <Typography variant={'h4'} component={'h2'}>
                       Ultimo Lanzamiento
                   </Typography>
                   <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20, my: 2}}
                           href={'https://onerpm.link/326059895093'} target="_blank"
                           rel="noopener noreferrer"
                   >
                       ESCÚCHALO AQUÍ
                   </Button>
               </Grid>
           </Grid>
        </>
    );
};

export default Contact;