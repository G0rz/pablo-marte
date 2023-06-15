import {Helmet} from "react-helmet-async";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Image} from "mui-image";
import Portada from "../../assets/images/Nightingale.webp";
import {useNavigate} from 'react-router-dom';

const Nightingale = () => {

    const navigate = useNavigate();

    return (<>
        <Helmet>
            <title>Pablo Marte - Nightingale</title>
        </Helmet>
        <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <Grid item>
                <Typography variant={'h3'} component={'h1'}>
                    NIGHTINGALE
                </Typography>
                <Box sx={{my: 4}}>
                    <Image
                        src={Portada}
                        height="400px"
                        width="400px"
                        errorIcon={true}
                        onClick={() => navigate('/nightingale')}
                        sx={{cursor: 'pointer'}}
                    />
                </Box>
                <Button variant={'contained'} component={'a'} size="large" sx={{borderRadius: 20}}
                        href={'https://distrokid.com/hyperfollow/pablomarte/nightingale'} target="_blank"
                        rel="noopener noreferrer"
                >
                    ESCÚCHALO AQUÍ
                </Button>
            </Grid>
        </Grid>
    </>);
};

export default Nightingale;