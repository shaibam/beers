import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const DRAWER_WIDTH = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: `${DRAWER_WIDTH}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function NavBar({ open = false, onDrawerIsOpen }) {
    const [_open, setOpen] = React.useState(false);

    useEffect(() => {
        if (open !== _open) setOpen(open)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const handleDrawerToggle = () => {
        if (onDrawerIsOpen)
            onDrawerIsOpen(!_open) //support higher source of truth
        else
            setOpen(o => !o);
    };

    return (
        <AppBar position="fixed" open={_open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{ mr: 2, ...(_open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Some beer brewing
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
