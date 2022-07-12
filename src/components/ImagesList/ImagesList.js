import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function ImagesList({ images = [] }) {
  return (
    <ImageList
      cols={5}
    >
      {images.map((item) => (
        <ImageListItem
          key={item.image_url}
          sx={{
            '& .MuiImageListItem-img': {
              width: '300px',
              height: '600px',
              objectFit: 'contain',
              flexGrow: 'unset',
            }
          }}        
        >
          <img
            src={item.image_url}            
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.tagline}
            subtitle={`First brewed ${item.first_brewed}`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.tagline}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}