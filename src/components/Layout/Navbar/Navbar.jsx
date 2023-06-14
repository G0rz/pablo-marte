import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, ListItemButton, ListItemText, Menu, ListItem
} from "@mui/material";
import {useState} from "react";
import NavListDrawer from "./NavListDrawer";
import {NavLink, useNavigate} from "react-router-dom";
import {
    usePopupState, bindTrigger, bindMenu,
} from 'material-ui-popup-state/hooks'

const Navbar = ({navlinks}) => {

    const [open, setOpen] = useState(false);
    const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    const navigate = useNavigate();

    return (<>
        <AppBar position="static" color={'transparent'} sx={{boxShadow: 'none'}}>
            <Toolbar sx={{justifyContent: {xs: 'left', sm: 'center'}, alignItems: 'center'}}>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="Menu"
                    sx={{mr: 2, display: {xs: 'flex', sm: 'none'}}}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography align={'center'} variant={'h6'} sx={{display: {xs: 'flex', sm: 'none'}}}
                            onClick={() => navigate('/')}>PABLO
                    MARTE</Typography>
                <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                    {navlinks.map((item) => {
                        return item.title === 'MÚSICA' ? <>
                            <Button variant="inherit" {...bindTrigger(popupState)} key={item.title} sx={{width: 150}}>
                                {item.title}
                            </Button>
                            <Menu {...bindMenu(popupState)} variant={'menu'}>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/nightingale'}>
                                        <ListItemText primary={'Nightingale 🐤'}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/petricor'}>
                                        <ListItemText primary={'Petricor ❤️'}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/tiempo-de-querer'}>
                                        <ListItemText primary={'Tiempo de querer 💙'}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/luminiscencia'}>
                                        <ListItemText primary={'Luminiscencia 🌊'}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/paisaje'}>
                                        <ListItemText primary={'Paisaje 🌆'}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding dense={true}>
                                    <ListItemButton onClick={popupState.close}
                                                    component={NavLink} to={'/leña-al-fuego'}>
                                        <ListItemText primary={'Leña al fuego 🔥'}/>
                                    </ListItemButton>
                                </ListItem>
                            </Menu>
                        </> : <Button component={NavLink} to={item.path} key={item.title}
                                      sx={{mr: 2, ml: 2, width: 150}}
                                      color={'inherit'}>{item.title}</Button>
                    })}
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer open={open} anchor='left' onClose={() => setOpen(false)} sx={{display: {xs: 'flex', sm: 'none'}}}>
            <NavListDrawer navlinks={navlinks} NavLink={NavLink} setOpen={setOpen}/>
        </Drawer>
    </>);
};

export default Navbar;