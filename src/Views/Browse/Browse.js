import React from 'react'
import useGetBeers from './hooks/useGetBeers'
import Alert from '@mui/material/Alert';

export default function Browse() {
  const beers = useGetBeers();

  if (!beers)
    return <Alert variant="outlined" severity="info">
      Fetching some beers for you, please hold your horses....
    </Alert>

  return (
    <div>Browse</div>
  )
}
