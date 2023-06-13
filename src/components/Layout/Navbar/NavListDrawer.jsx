import {
    Box, Divider, Link, List, ListItem, ListItemButton, ListItemText
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavListDrawer = ({navlinks, mode, changeTheme, NavLink, setOpen}) => {
    return (<Box sx={{width: 250}}>
        <nav aria-label="drawer">
            <List>
                {navlinks.map((item) => {
                    return (<ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} onClick={() => setOpen(false)}
                                        component={NavLink} to={item.path}>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>)
                })}
            </List>
        </nav>
        <nav aria-label="tools" style={{position: 'absolute', bottom: 0}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <ListItemText onClick={() => changeTheme(mode)}>
                            {mode ? <LightModeOutlinedIcon color="primary"/> : <DarkModeOutlinedIcon color="primary"/>}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding >
                    <ListItemText sx={{textAlign: 'center'}}>
                        <small> Copyright © {new Date().getFullYear()} <Link component={'a'} href={'https://github.com/G0rz'} color={'inherit'} underline={'none'} target="_blank" rel="noopener noreferrer">G0rz</Link> All rights reserved.</small>
                    </ListItemText>
                </ListItem>
            </List>
        </nav>
    </Box>);
};

export default NavListDrawer;