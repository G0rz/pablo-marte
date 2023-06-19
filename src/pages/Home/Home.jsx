import {Helmet} from "react-helmet-async";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Image} from "mui-image";
import Nuevo from "../../assets/images/Nightingale.webp";
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const videos = ["https://www.youtube-nocookie.com/embed/mON1S3TzK_E"];

    return (<>
        <Helmet>
            <title>Pablo Marte - Home</title>
            <link rel="preload" as="image" href={Nuevo}/>
        </Helmet>
        <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <Grid item xs={12} sx={{my: 2}}>
                <Typography variant={'h2'} component={'h1'}>
                    Lo más nuevo
                </Typography>
            </Grid>
            <Grid item sx={{maxWidth: 850, width: {xs: '65vw', md: '35vw'}, my: 2}}>
                <Image
                    src={Nuevo}
                    alt={'Lo más nuevo'}
                    height="100%"
                    width="100%"
                    errorIcon={true}
                    onClick={() => navigate('/nightingale')}
                    sx={{cursor: 'pointer'}}
                />
            </Grid>
            <Grid item xs={12} sx={{my: 2}}>
                <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20, my: 4}}
                        href={'https://onerpm.link/326059895093'} target="_blank"
                        rel="noopener noreferrer"
                >
                    Ultimo Lanzamiento - ESCÚCHALO AQUÍ
                </Button>
            </Grid>
            <Grid item sx={{maxWidth: 850, width: '80%', height: '100%', margin: '0 auto', my: 4}}>
                <Box sx={{width: '100%', position: 'relative', overflow: 'hidden'}}>
                    <iframe width="100%" height="480" src={videos[Math.floor(Math.random() * videos.length)]}
                            title="YouTube Pablo Marte"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </Box>
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
