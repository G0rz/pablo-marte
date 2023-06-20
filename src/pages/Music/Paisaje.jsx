import Portada from "../../assets/images/paisaje.webp";
import Album from "../../components/Album";

const Paisaje = () => {
    return (<>
        <Album helmet={'Pablo Marte - Paisaje'} title={'PAISAJE'} Portada={Portada} aLink={"https://embed.music.apple.com/mx/album/paisaje-single/1597746711"}
               sLink={"https://open.spotify.com/embed/album/6kqjXQUCScR5PtMgAcOJPq?utm_source=generator"}/>
        </>);
};

export default Paisaje;