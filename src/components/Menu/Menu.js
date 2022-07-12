import React, { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import StarIcon from '@mui/icons-material/Star';

const DRAWER_WIDTH = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Menu({ open = false, onDrawerClose }) {
    const theme = useTheme();
    const [_open, setOpen] = React.useState(false);

    useEffect(() => {
        if (open !== _open) setOpen(open)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const handleDrawerClose = () => {
        if (onDrawerClose)
            onDrawerClose() //support higher source of truth
        else
            setOpen(false);
    };

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={_open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SportsBarIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Browse'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Favorites'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
