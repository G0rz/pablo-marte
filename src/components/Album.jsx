import {Helmet} from "react-helmet-async";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Image} from "mui-image";

const Album = ({helmet, title, Portada, aLink, sLink}) => {
    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                <Grid item sx={{my: 5}}>
                    <Typography variant={'h3'} component={'h1'}>
                        {title}
                    </Typography>
                    <Box sx={{my: 4}}>
                        <Image duration={0}
                               src={Portada}
                               height="425px"
                               width="425px"
                               errorIcon={true}
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
                                    height="450"   title={'leñaalfuegoA'}
                                    style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px'}}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                    src={aLink}></iframe>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0"
                                    scrolling="no"
                                    height="450"   title={'leñaalfuegoS'}
                                    style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px'}}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                    src={sLink}></iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Album;