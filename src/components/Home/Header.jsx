import {Grid, IconButton, Tooltip} from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
// import CV from '../../assets/files/CV-Cipriano Antonio Gaspar Morales.pdf'
import {useState} from "react";

const Header = ({mode, setMode}) => {

    const [loading, setLoading] = useState(false);

    const drawerWidth = 240;

    const changeTheme = (themeMode) => {
        setMode(!themeMode)
        localStorage.setItem('Mode', !themeMode);
    }

    const onDownload = () => {
        // setLoading(true)
        // const link = document.createElement("a");
        // link.download = CV;
        // link.href = CV;
        // link.click();
        // setLoading(false)
    };

    return (<Grid item xs={12}>
            <Grid container alignItems={'center'} justifyContent={'space-around'}>
                <Grid item>
                    <LoadingButton
                        variant={'outlined'}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<CloudDownloadOutlinedIcon/>}
                        onClick={onDownload}
                    >
                        DESCARGAR RESUMEN
                    </LoadingButton>
                </Grid>
                <Grid item>
                    <Tooltip title={mode ? `Cambiar a Modo Oscuro` : `Cambiar a Modo Claro`}>
                        <IconButton color="primary" onClick={() => changeTheme(mode)}>
                            {mode ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>}
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>);
};

export default Header;
