import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Favorites from '../../views/Favorites/Favorites';
import Browse from '../../views/Browse/Browse';

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
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Routes>
                    <Route path="/browse" element={<NavBar
                        open={open}
                        onDrawerIsOpen={handleIsDrawerOpen}
                        breadcrumb={'Browse'}
                    />
                    } >
                        <Route path=":pageIndex" element={<NavBar
                            open={open}
                            onDrawerIsOpen={handleIsDrawerOpen}
                            breadcrumb={'Browse'}
                        />}>
                            <Route path=":search" element={<NavBar
                                open={open}
                                onDrawerIsOpen={handleIsDrawerOpen}
                                breadcrumb={'Browse'}
                            />}></Route>
                        </Route>
                    </Route>
                    <Route path="/favorites" element={<NavBar
                        open={open}
                        onDrawerIsOpen={handleIsDrawerOpen}
                        breadcrumb={'Favorites'}
                    />
                    } />
                </Routes>

                <Menu open={open} onDrawerClose={handleDrawerClose}></Menu>

                <Content open={open}>
                    <DrawerHeader />
                    <Routes>
                        <Route path="/browse" element={<Browse />}>
                            <Route path=":pageIndex" element={<Browse />}>
                                <Route path=":search" element={<Browse />} />
                            </Route>
                        </Route>
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/" element={<Navigate to="/browse/1" replace />} />
                    </Routes>
                </Content>
            </Box>
        </BrowserRouter>
    );
}
