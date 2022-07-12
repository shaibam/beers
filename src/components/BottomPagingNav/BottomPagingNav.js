import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function BottomPagingNav({ pageIndex = 1, pages }) {    

    if (!pages) return null;
    return (
        <>
            <Box sx={{
                width: '100vw',
                bottom: 0,
                left: 0,
                boxShadow: '0px 0px 5px 1px lightgrey',
                position: 'fixed'
            }}>
                <BottomNavigation
                    showLabels
                    value={pageIndex-1}
                >
                    {_.map([...new Array(pages)], (page, index) => {
                        return (<BottomNavigationAction
                            key={'page' + (index + 1)}
                            label={index + 1}
                            component={Link}
                            to={`./${index + 1}`}
                        />)
                    })}
                </BottomNavigation>
            </Box>
        </>
    )
}
