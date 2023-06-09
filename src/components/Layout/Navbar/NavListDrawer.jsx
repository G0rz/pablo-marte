import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavListDrawer = ({navlinks, mode, changeTheme}) => {
    return (
        <Box sx={{width: 250}}>
            <nav aria-label="drawer">
                <List>
                    {navlinks.map((item) => {
                        return (<ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
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
                                {mode ? <LightModeOutlinedIcon color="primary" /> : <DarkModeOutlinedIcon color="primary"/>}
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
        </Box>
    );
};

export default NavListDrawer;