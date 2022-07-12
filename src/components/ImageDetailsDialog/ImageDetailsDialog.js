import React, { useMemo } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function ImageDetailsDialog({ image = {}, onClose = () => { } }) {

    const listMemo = useMemo(() => {
        return [
            image.description,
            `First brewed, ${image.first_brewed}`,
            image.tagline,
            `Goes well with, ${(image.food_pairing || []).join(', ')}`
        ]
    }, [image])

    return (
        <Dialog onClose={onClose} open={true}>
            <DialogTitle>{image.name}</DialogTitle>
            <List sx={{ pt: 0 }}>
                {listMemo.map((item, i) => (
                    <ListItem key={'item' + i}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}
