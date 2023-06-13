import {
    Box, Divider, List, ListItem, ListItemButton, ListItemText
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
        <Divider/>
        <nav aria-label="tools">
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <ListItemText onClick={() => changeTheme(mode)}>
                            {mode ? <LightModeOutlinedIcon color="primary"/> : <DarkModeOutlinedIcon color="primary"/>}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Spam"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>);
};

export default NavListDrawer;