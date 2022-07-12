import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typograxphy';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Favorites from '../../Views/Favorites/Favorites';
import Browse from '../../Views/Browse/Browse';

const DRAWER_WIDTH = 240;

const Content = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${DRAWER_WIDTH}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Main() {
    const [open, setOpen] = React.useState(false);

    const handleIsDrawerOpen = (_open) => {
        setOpen(_open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar open={open} onDrawerIsOpen={handleIsDrawerOpen} />
            <Menu open={open} onDrawerClose={handleDrawerClose}></Menu>
            <Content open={open}>
                <DrawerHeader />

                <BrowserRouter>
                    <Routes>
                        <Route path="/browse" element={<Browse />}/>
                        <Route path="/favorites" element={<Favorites />}/>
                        <Route path="/" element={<Browse />}/>
                    </Routes>
                </BrowserRouter>              
            </Content>
        </Box>
    );
}
