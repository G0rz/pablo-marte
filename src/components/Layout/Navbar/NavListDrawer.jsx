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
                {navlinks.map((item, key) => {
                    return item.title === 'Música' ? <Box key={key}>
                        <ListItemButton onClick={handleClick} sx={{textAlign: 'center'}} key={key}>
                            <ListItemText>
                                Música {expand ? ' - ' : ' + '}
                            </ListItemText>
                        </ListItemButton>
                        <Collapse in={expand} timeout="auto" unmountOnExit>
                            <Divider/>
                            <ListItem disablePadding dense={true} key={'🐤'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/nightingale'}>
                                    <ListItemText primary={'Nightingale 🐤'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true} key={'❤️'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/petricor'}>
                                    <ListItemText primary={'Petricor ❤️'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true} key={'💙'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/tiempo-de-querer'}>
                                    <ListItemText primary={'Tiempo de querer 💙'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true} key={'🌊'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/luminiscencia'}>
                                    <ListItemText primary={'Luminiscencia 🌊'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true} key={'🌆'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/paisaje'}>
                                    <ListItemText primary={'Paisaje 🌆'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding dense={true} key={'🔥'}>
                                <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                                component={NavLink} to={'/leña-al-fuego'}>
                                    <ListItemText primary={'Leña al fuego 🔥'}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </Collapse>
                    </Box> : item.title === 'Pablo Marte' ?
                        <ListItem disablePadding dense={true} key={key}>
                            <ListItemButton onClick={() => setOpen(false)} sx={{textAlign: 'center'}}
                                            component={NavLink} to={'/'}>
                                <ListItemText primary={'Home'}/>
                            </ListItemButton>
                        </ListItem>
                        :
                        <ListItem key={key} disablePadding dense={true}>
                            <ListItemButton sx={{textAlign: 'center'}}
                                            onClick={() => setOpen(false)}
                                            component={NavLink} to={item.path}>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                })}
            </List>
        </nav>
        <nav aria-label="tools" style={{position: 'absolute', bottom: 0, background: '#2380d1 !important'}}>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemText sx={{textAlign: 'center'}}>
                        <small> Copyright © {new Date().getFullYear()}
                            <Link component={'a'}
                                  href={'https://github.com/G0rz'}
                                  color={'inherit'} underline={'none'}
                                  target="_blank"
                                  rel="noopener noreferrer">G0rz</Link>
                            All rights reserved.</small>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </Box>);
};

export default NavListDrawer;