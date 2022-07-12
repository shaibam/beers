import React, { useState } from 'react'
import useGetBeers from './hooks/useGetBeers'
import Alert from '@mui/material/Alert';
import ImagesList from '../../components/ImagesList/ImagesList';
import ImageDetailsDialog from '../../components/ImageDetailsDialog/ImageDetailsDialog';

export default function Favorites() {
  const [selected, setSelected] = useState();
  const beers = useGetBeers();

  const handleImageClick = (image) => {
    setSelected(image)
  }

  const handleDetailsClose = () => {
    setSelected(null)
  }

  if (!beers)
    return <Alert variant="outlined" severity="info">
      Come-on... there must be something you like!
    </Alert>

  return (
    <>
      {selected ? <ImageDetailsDialog
        image={selected}
        onClose={handleDetailsClose}
      /> : null}
      <ImagesList
        images={beers}
        onImageClick={handleImageClick} />
    </>
  )
}
