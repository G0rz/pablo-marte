import {Helmet} from "react-helmet-async";
import {Grid, Typography} from "@mui/material";
import {Image} from "mui-image";
import Me from "../../assets/images/AboutMe.webp";

const AboutMe = () => {

    return (<>
        <Helmet>
            <title>Pablo Marte - About Me</title>
        </Helmet>
        <Grid container alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12} textAlign={'center'}>
                <Typography variant={'h3'} component={'h1'} sx={{my:4}}>
                    EL DESTINO
                </Typography>
            </Grid>
            <Grid item xs={12} md={10} sx={{my: 2}}>
                <blockquote>
                    En 2019 conocí la música por "casualidad" o al menos eso creo... a partir de ese momento comencé
                    a componer sin tener conocimientos musicales y en noviembre de ese mismo año nació "Petricor",
                    una canción creada totalmente de mi intuición, de mi experiencia y de mi sentir. Me enamoré de
                    ese proceso de plasmar cosas increíbles como el sentir del ser humano en fragmentos musicales.
                    Pablo Marte hace alusión a la frase para amarte y si estas escuchando estas canciones y más aun
                    leyendo esto probablemente creas que es mera coincidencia, pero estoy seguro que no lo es.
                </blockquote>
            </Grid>
            <Grid item xs={12} md={8} sx={{my: 2}}>
                <Image
                    src={Me}
                    alt={'Acerca de'}
                    height="100%"
                    width="100%"
                    errorIcon={true}
                />
            </Grid>
        </Grid>
    </>);
};

export default AboutMe;
