import React, { useMemo } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useWindowSize } from 'rooks';

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 600;

export default function ImagesList({ images = [], onImageClick, onAddToFavorites, onRemoveFromFavorites }) {

  const { innerWidth } = useWindowSize();

  const columnsMemo = useMemo(() => {
    return Math.floor(innerWidth / IMAGE_WIDTH);
  }, [innerWidth]);

  const handleImageClick = (image) => {
    if (onImageClick) onImageClick(image)
  }

  const handleAddToFavorites = (image) => {
    if (onAddToFavorites) onAddToFavorites(image)
  }

  const handleRemoveFromFavorites = (image) => {
    if (onRemoveFromFavorites) onRemoveFromFavorites(image)
  }

  return (
    <ImageList
      cols={columnsMemo}
    >
      {images.map((item, i) => (
        <ImageListItem
          key={item.id}
          sx={{
            '& .MuiImageListItem-img': {
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              objectFit: 'contain',
              flexGrow: 'unset'
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
              <>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.tagline}`}
                  onClick={() => { handleImageClick(item) }}
                >
                  <InfoIcon />
                </IconButton>
                {!item?.favorite ?
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.tagline}`}
                    onClick={() => { handleAddToFavorites(item) }}
                  >
                    <StarOutlineIcon />
                  </IconButton> :

                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.tagline}`}
                    onClick={() => { handleRemoveFromFavorites(item) }}
                  >
                    <StarIcon />
                  </IconButton>
                }
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
