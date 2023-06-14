import {Helmet} from "react-helmet";
import {Image} from 'mui-image';
import ContactImage from '../../assets/images/Contact.webp'
import {Grid} from "@mui/material";
const Contact = () => {


    return (
        <>
            <Helmet>
                <title>Pablo Marte - Contact</title>
            </Helmet>
           <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
               <Grid item xs={12} >
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
           </Grid>
        </>
    );
};

export default Contact;