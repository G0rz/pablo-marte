import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Box, Button, Drawer, IconButton, Toolbar, Tooltip, Typography
} from "@mui/material";
import {useState} from "react";
import NavListDrawer from "./NavListDrawer";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {NavLink} from "react-router-dom";

const Navbar = ({mode, changeTheme, navlinks}) => {

    const [open, setOpen] = useState(false);

    return (<>
        <AppBar position="static" color={'transparent'}>
            <Toolbar sx={{justifyContent: {xs: 'left', sm: 'center'}, alignItems: 'center'}}>
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
                <Typography align={'center'} variant={'h6'} sx={{display: {xs: 'flex', sm: 'none'}}}>PABLO
                    MARTE</Typography>
                <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                    {navlinks.map((item) => {
                        return <Button component={NavLink} to={item.path} key={item.title} sx={{mr: 2, ml: 2}}
                                       color={'inherit'}>{item.title}</Button>
                    })}
                </Box>
                <Tooltip title={mode ? `Cambiar a Modo Oscuro` : `Cambiar a Modo Claro`}
                         sx={{display: {xs: 'none', sm: 'flex', mr: 2, ml: 2}}}>
                    <IconButton color="primary" onClick={() => changeTheme(mode)}>
                        {mode ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
        <Drawer open={open} anchor='left' onClose={() => setOpen(false)} sx={{display: {xs: 'flex', sm: 'none'}}}>
            <NavListDrawer navlinks={navlinks} mode={mode} changeTheme={changeTheme} NavLink={NavLink}
                           setOpen={setOpen}/>
        </Drawer>
    </>);
};

export default Navbar;