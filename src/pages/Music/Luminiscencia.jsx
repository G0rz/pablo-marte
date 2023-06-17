import {Helmet} from "react-helmet-async";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Image} from "mui-image";
import Portada from "../../assets/images/luminiscencia.webp";

const Luminiscencia = () => {
    return (
        <>
            <Helmet>
                <title>Pablo Marte - Luminiscencia</title>
            </Helmet>
            <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                <Grid item xs="auto" sx={{my: 5}}>
                    <Typography variant={'h3'} component={'h1'}>
                        LUMINISCENCIA
                    </Typography>
                    <Box sx={{my: 4}}>
                        <Image
                            src={Portada}
                            height="400px"
                            width="400px"
                            errorIcon={true}
                            sx={{cursor: 'pointer'}}
                        />
                    </Box>
                    <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20, my: 5}}
                            href={'https://distrokid.com/hyperfollow/pablomarte/nightingale'} target="_blank"
                            rel="noopener noreferrer"
                    >
                        ESCÚCHALO AQUÍ
                    </Button>
                    <hr/>
                </Grid>
                <Grid item xs={12} sx={{my: 5}}>
                    <Grid container alignItems={'center'} justifyContent={'center'} spacing={4}>
                        <Grid item xs={10} md={3}>
                            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0"
                                    scrolling="no"
                                    height="450"   title={'luminaA'}
                                    style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px'}}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                    src="https://embed.music.apple.com/mx/album/luminiscencia-single/1556969087"></iframe>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0"
                                    scrolling="no"
                                    height="450"   title={'luminaS'}
                                    style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px'}}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                    src="https://open.spotify.com/embed/album/1cM4Az97D1sN14auRfzsSB?utm_source=generator"></iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Luminiscencia;