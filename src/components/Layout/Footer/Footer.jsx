import {Grid, IconButton, Link, SvgIcon, Tooltip} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    function SpotifyIcon(props) {
        return (<SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
            </svg>
        </SvgIcon>);
    }

    function DeezerIcon(props) {
        return (<SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M17.68 5.47H22V8h-4.32zm0 3.51H22v2.53h-4.32zm0 3.51H22v2.53h-4.32zM2 16h4.32v2.53H2zm5.22 0h4.32v2.53H7.22zm5.23 0h4.32v2.53h-4.32zm5.23 0H22v2.53h-4.32zm-5.23-3.51h4.32v2.53h-4.32zm-5.23 0h4.32v2.53H7.22zm0-3.51h4.32v2.53H7.22z"/>
            </svg>
        </SvgIcon>);
    }

    function AppleMusicIcon(props) {
        return (<SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726a10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14c-.35.1-.706.157-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a.904.904 0 0 0 .02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066c-.76.15-1.52.303-2.28.456l-2.325.47l-1.374.278c-.016.003-.032.01-.048.013c-.277.077-.377.203-.39.49c-.002.042 0 .086 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233c-.35.1-.71.16-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177c.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165c.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482c.008.073.012.148.012.223c.002 1.91.002 3.822 0 5.732z"/>
            </svg>
        </SvgIcon>);
    }

    function AmazonMusicIcon(props) {
        return (<SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17.003 17.003 0 0 0 10.167-3.08M20.404 20.125v3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-3.3m0 3.3v2m-14.004-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2m-4-5.2v5.2m4-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2"/>
                <circle cx="31.88" cy="17.675" r=".7" fill="currentColor"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      d="M31.88 20.125v5.3m-5.34-.452a2.249 2.249 0 0 0 1.646.447h.448a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.897a1.323 1.323 0 0 1-1.322-1.325h0a1.323 1.323 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.644.448m7.77 3.85a2 2 0 0 1-1.737 1.007h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a1.999 1.999 0 0 1 1.735 1.004"/>
            </svg>
        </SvgIcon>);
    }

    return (<Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={12} sx={{my: 1}}>
            <Tooltip title="Instagram" arrow>
                <IconButton aria-label="Instagram" component={'a'} href={'https://www.instagram.com/paul.t30/?hl=es-la'}
                            target="_blank" rel="noopener noreferrer" color={'inherit'}>
                    <InstagramIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Spotify" arrow>
                <IconButton aria-label="Spotify" component={'a'}
                            href={'https://open.spotify.com/artist/56CzSMvDKHkeNOZqtlqq3o?si=S4tS8-D1Qy2xNDdq3olhtw'}
                            target="_blank"
                            rel="noopener noreferrer" color={'inherit'}>
                    <SpotifyIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Apple Music" arrow>
                <IconButton aria-label="Apple Music" component={'a'}
                            href={'https://music.apple.com/mx/artist/pablo-marte/1494510551'}
                            target="_blank" rel="noopener noreferrer" color={'inherit'}>
                    <AppleMusicIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Amazon Music" arrow>
                <IconButton aria-label="Amazon Music" component={'a'}
                            href={'https://music.amazon.com.mx/artists/B083WNNZ92/pablo-marte'}
                            target="_blank"
                            rel="noopener noreferrer" color={'inherit'}>
                    <AmazonMusicIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Deezer" arrow>
                <IconButton aria-label="Deezer" component={'a'} href={'https://deezer.page.link/qQzfAG1SPqhzR4Q87'}
                            target="_blank" rel="noopener noreferrer" color={'inherit'}>
                    <DeezerIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Youtube" arrow>
                <IconButton aria-label="Youtube" component={'a'} href={'https://youtube.com/@Pablo.marte37'}
                            target="_blank"
                            rel="noopener noreferrer" color={'inherit'}>
                    <YouTubeIcon/>
                </IconButton>
            </Tooltip>
        </Grid>
        <Grid item xs={12} sx={{my: 4}}>
            <small> Copyright © {new Date().getFullYear()} <Link component={'a'} href={'https://github.com/G0rz'}
                                                                 color={'inherit'} underline={'none'} target="_blank"
                                                                 rel="noopener noreferrer">G0rz</Link> All rights
                reserved.</small>
        </Grid>
    </Grid>);
};

export default Footer;
