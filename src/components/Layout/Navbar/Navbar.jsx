import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Box, Button, Drawer, IconButton, Toolbar, Tooltip, Typography, Link
} from "@mui/material";
import {useState} from "react";
import NavListDrawer from "./NavListDrawer";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const navlinks =
    [{title: 'Musica', path: 'asd'},
        {title: 'Acerca de Mí', path: 'asdas'},
        {title: 'Pablo Marte', path: 'asda'},
        {title: 'Contacto', path: 'asdasda'},
        {title: 'Galería', path: 'asdads'}]
const Navbar = ({mode, changeTheme}) => {

    const [open, setOpen] = useState(false);

    return (<>
        <AppBar position="static" color={'transparent'}>
            <Toolbar sx={{ justifyContent:'center', alignItems:'center'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2, display: {xs: 'flex', sm: 'none'}}}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography align={'center'} variant={'h6'}  sx={{ display: {xs: 'flex', sm: 'none'}}}>PABLO MARTE</Typography>
                <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                    {navlinks.map((item) => {
                        if (item.title === 'Pablo Marte') {
                            return <Link sx={{textDecoration: 'none'}}>
                                <Button component={'a'} href={item.path} key={item.title} sx={{mr: 2, ml: 2}}
                                                 color={'inherit'}>{item.title}</Button>
                            </Link>
                        } else {
                            return <Button component={'a'} href={item.path} key={item.title} sx={{mr: 2, ml: 2}}
                                           color={'inherit'}>{item.title}</Button>
                        }
                    })}
                </Box>
                <Tooltip title={mode ? `Cambiar a Modo Oscuro` : `Cambiar a Modo Claro`}  sx={{display: {xs: 'none', sm: 'flex', mr: 2, ml: 2}}}>
                    <IconButton color="primary" onClick={() => changeTheme(mode)}>
                        {mode ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
        <Drawer open={open} anchor='left' onClose={() => setOpen(false)} sx={{display: {xs: 'flex', sm: 'none'}}}>
            <NavListDrawer navlinks={navlinks} mode={mode} changeTheme={changeTheme}/>
        </Drawer>
    </>);
};

export default Navbar;