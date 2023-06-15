import {Helmet} from "react-helmet-async";
import {Grid} from "@mui/material";
import {Image} from "mui-image";
import Me from "../../assets/images/AboutMe.webp";

const AboutMe = () => {

    return (<>
        <Helmet>
            <title>Pablo Marte - About Me</title>
        </Helmet>
        <Grid container alignItems={'center'} justifyContent={'center'} textAlign={'left'}>
            <Grid item xs={12} md={6} sx={{my: 3}}>
                <blockquote>
                    En 2019 conocí la música por "casualidad" o al menos eso creo... a partir de ese momento comencé
                    a componer sin tener conocimientos musicales y en noviembre de ese mismo año nació "Petricor",
                    una canción creada totalmente de mi intuición, de mi experiencia y de mi sentir. Me enamoré de
                    ese proceso de plasmar cosas increíbles como el sentir del ser humano en fragmentos musicales.
                    Pablo Marte hace alusión a la frase para amarte y si estas escuchando estas canciones y más aun
                    leyendo esto probablemente creas que es mera coincidencia, pero estoy seguro que no lo es.
                </blockquote>
            </Grid>
            <Grid item xs={12} md={6} sx={{my: 3}}>
                <Image
                    src={Me}
                    alt={'Lo más nuevo'}
                    height="100%"
                    width="100%"
                    errorIcon={true}
                    sx={{padding: 4}}
                />
            </Grid>
        </Grid>
    </>);
};

export default AboutMe;
