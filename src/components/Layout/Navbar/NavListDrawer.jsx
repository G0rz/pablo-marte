import {
    Box, Collapse, Divider, Link, List, ListItem, ListItemButton, ListItemText
} from "@mui/material";
import {useState} from "react";


const NavListDrawer = ({navlinks, NavLink, setOpen}) => {

    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    };

    return (<Box sx={{width: 250}}>
        <nav aria-label="drawer">
            <List>
                {navlinks.map((item) => {
                    return item.title === 'Música' ? <>
                        <ListItemButton onClick={handleClick} sx={{textAlign: 'center'}}>
                            <ListItemText>
                                Música {expand ? ' - ' : ' + '}
                            </ListItemText>
                        </ListItemButton>
                        <Collapse in={expand} timeout="auto" unmountOnExit>
                            <Divider/>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/nightingale'}>
                                    <ListItemText primary={'Nightingale 🐤'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/petricor'}>
                                    <ListItemText primary={'Petricor ❤️'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/tiempo-de-querer'}>
                                    <ListItemText primary={'Tiempo de querer 💙'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/luminiscencia'}>
                                    <ListItemText primary={'Luminiscencia 🌊'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/paisaje'}>
                                    <ListItemText primary={'Paisaje 🌆'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/leña-al-fuego'}>
                                    <ListItemText primary={'Leña al fuego 🔥'}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </Collapse>
                    </> : item.title === 'Pablo Marte' ? <>
                    </> : <>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{textAlign: 'center', background: '#2380d1 !important'}}
                                            onClick={() => setOpen(false)}
                                            component={NavLink} to={item.path}>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                    </>
                })}
            </List>
        </nav>
        <nav aria-label="tools" style={{position: 'absolute', bottom: 0, background: '#2380d1 !important'}}>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemText sx={{textAlign: 'center'}}>
                        <small> Copyright © {new Date().getFullYear()} <Link component={'a'}
                                                                             href={'https://github.com/G0rz'}
                                                                             color={'inherit'} underline={'none'}
                                                                             target="_blank"
                                                                             rel="noopener noreferrer">G0rz</Link> All
                            rights reserved.</small>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </Box>);
};

export default NavListDrawer;