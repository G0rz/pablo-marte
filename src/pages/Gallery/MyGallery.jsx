import {Helmet} from "react-helmet-async";
import {Grid, Typography} from "@mui/material";
import Gallery from "react-photo-gallery";
import Photo1 from "../../assets/images/photo1.webp";
import Photo2 from "../../assets/images/photo2.webp";
import Photo3 from "../../assets/images/photo3.webp";
import Photo4 from "../../assets/images/photo4.webp";
import Photo5 from "../../assets/images/photo5.webp";
import Photo6 from "../../assets/images/photo6.webp";
import Photo7 from "../../assets/images/photo7.webp";
import {useCallback, useState} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
    {
        src: Photo1,
        width: 4,
        height: 5,
        title: 'Photo1'
    },
    {
        src: Photo2,
        width: 4,
        height: 5,
        title: 'Photo2'
    },
    {
        src: Photo3,
        width: 4,
        height: 5,
        title: 'Photo3'
    },
    {
        src: Photo4,
        width: 4,
        height: 5,
        title: 'Photo4'
    },
    {
        src: Photo5,
        width: 4,
        height: 5,
        title: 'Photo5'
    },
    {
        src: Photo6,
        width: 4,
        height: 5,
        title: 'Photo6'
    },
    {
        src: Photo7,
        width: 4,
        height: 5,
        title: 'Photo7'
    }
];
const MyGallery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>Pablo Marte - Gallery</title>
            </Helmet>
           <Grid container justifyContent={'center'} alignItems={'center'}>
               <Grid item xs={12} sx={{my: 4}}>
                   <Typography variant={'h3'} component={'h1'}>
                       Galería
                   </Typography>
               </Grid>
               <Grid item >
                   <Gallery photos={photos} onClick={openLightbox} limitNodeSearch={4}/>
                   <ModalGateway >
                       {viewerIsOpen ? (
                           <Modal onClose={closeLightbox}>
                               <Carousel
                                   currentIndex={currentImage}
                                   views={photos.map(x => ({
                                       ...x,
                                       srcset: x.srcSet,
                                       caption: x.title
                                   }))}
                               />
                           </Modal>
                       ) : null}
                   </ModalGateway>
               </Grid>
           </Grid>
        </>
    );
};

export default MyGallery;