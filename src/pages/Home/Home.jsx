import {Helmet} from "react-helmet-async";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Image} from "mui-image";
import Nuevo from "../../assets/images/Nightingale.webp";
import Portada from "../../assets/images/Nightingale.webp";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const videos = ["https://www.youtube-nocookie.com/embed/mON1S3TzK_E"];

    return (<>
        <Helmet>
            <title>Pablo Marte - Home</title>
            <link rel="preload" as="image" href={Nuevo}/>
        </Helmet>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item sx={{my: 5}}>
                <Typography variant={'h3'} component={'h1'}>
                    LO MÁS NUEVO
                </Typography>
                <Box sx={{my: 4}}>
                    <Image
                           src={Portada}
                           height="425px"
                           width="425px"
                           errorIcon={true}
                           onClick={() => navigate('/nightingale')}
                           sx={{cursor: 'pointer'}}
                    />
                </Box>
                <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20, my: 4}}
                        href={'https://onerpm.link/326059895093'} target="_blank"
                        rel="noopener noreferrer"
                >
                    Ultimo Lanzamiento - ESCÚCHALO AQUÍ
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={7} sx={{height: {xs: 300, md: 550}}}>
                        <iframe width="100%" height="100%" src={videos[Math.floor(Math.random() * videos.length)]}
                                title="YouTube Pablo Marte"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={12} sx={{my: 2}}>
                <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20, my: 4, py: 2, px: 2}}
                        href={'https://push.fm/fl/ym1utlnz?fbclid=IwAR28Lty8J8LH2CiiFyoZAfjyEXSu33eGlpPGLZPhSemqNJEn-tF55HNxQLA'}
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    ESCUCHA MÁS MÚSICA
                </Button>
            </Grid>
        </Grid>
    </>);
};

export default Home;
