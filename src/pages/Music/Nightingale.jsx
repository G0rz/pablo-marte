import Portada from "../../assets/images/Nightingale.webp";
import Album from "../../components/Album";

const Nightingale = () => {
    return (<>
        <Album helmet={'Pablo Marte - Nightingale'} title={'NIGHTINGALE'} Portada={Portada} aLink={"https://embed.music.apple.com/mx/album/nightingale-single/1688354063"}
               sLink={"https://open.spotify.com/embed/album/4eUz0BNRBtImRrc7IJ72y7?utm_source=generator"}/>
    </>);
};

export default Nightingale;