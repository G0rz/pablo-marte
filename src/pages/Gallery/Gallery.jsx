import {Helmet} from "react-helmet-async";
import {Grid, ImageList, ImageListItem} from "@mui/material";
import {srcset} from "../../components/tools/tools";
import Photo1 from "../../assets/images/photo1.webp";
import Photo2 from "../../assets/images/photo2.webp";
import Photo3 from "../../assets/images/photo3.webp";
import Photo4 from "../../assets/images/photo4.webp";
import Photo5 from "../../assets/images/photo5.webp";
import Photo6 from "../../assets/images/photo6.webp";
import Photo7 from "../../assets/images/photo7.webp";
const Gallery = () => {

    const photos = [
        {
            img: Photo1,
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: Photo2,
            title: 'Burger',
        },
        {
            img: Photo3,
            title: 'Camera',
        },
        {
            img: Photo4,
            title: 'Coffee',
            cols: 2,
        },
        {
            img: Photo5,
            title: 'Hats',
            cols: 2,
        },
        {
            img: Photo6,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: Photo7,
            title: 'Basketball',
        }
    ];

    return (
        <>
            <Helmet>
                <title>Pablo Marte - Gallery</title>
            </Helmet>
           <Grid container justifyContent={'center'} alignItems={'center'}>
               <Grid item >
                   <ImageList
                       variant="quilted"
                       cols={4}
                       rowHeight={120}
                   >
                       {photos.map((item) => (
                           <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                               <img
                                   {...srcset(item.img, 121, item.rows, item.cols)}
                                   alt={item.title}
                                   loading="lazy"
                               />
                           </ImageListItem>
                       ))}
                   </ImageList>
               </Grid>
           </Grid>
        </>
    );
};

export default Gallery;