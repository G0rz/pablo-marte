import {Grid, Typography} from "@mui/material";
// import image from "../../assets/images/profile_pic.png";

const AboutMe = () => {
    return (
        <Grid container alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12} md={2} textAlign={'center'}>
                {/*<img alt={'Cipriano Antonio Gaspar Morales'} src={image} width={200}/>*/}
            </Grid>
            <Grid item xs={10} md={5} textAlign={'justify'}>
                <Typography variant={'body1'}>

                </Typography>
            </Grid>
        </Grid>
    );
};

export default AboutMe;
