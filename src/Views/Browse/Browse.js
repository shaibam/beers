import React, { useState } from 'react'
import useGetBeers from './hooks/useGetBeers'
import Alert from '@mui/material/Alert';
import ImagesList from '../../components/ImagesList/ImagesList';
import ImageDetailsDialog from '../../components/ImageDetailsDialog/ImageDetailsDialog';
import Search from '../../components/Search/Search';
import style from './style/style.module.css';
import usePageIndex from './hooks/usePageIndex';
import BottomPagingNav from '../../components/BottomPagingNav/BottomPagingNav';
import { PER_PAGE } from '../../APIs/getAllBeers';
import { useNavigate } from "react-router-dom";

export default function Browse() {
  const [selected, setSelected] = useState();
  const [searchText, setSearchText] = useState();
  const pageIndex = usePageIndex(searchText);
  const beers = useGetBeers(pageIndex, searchText);
  const navigate = useNavigate();  

  const handleImageClick = (image) => {
    setSelected(image)
  }

  const handleDetailsClose = () => {
    setSelected(null)
  }

  const handleSearchSubmit = (text) => {
    setSearchText(text);
    navigate(`/browse/1${text ? '/' + text : ''}`);
  }

  if (!beers)
    return <Alert variant="outlined" severity="info">
      Fetching some beers for you, please hold your horses....
    </Alert>

  return (
    <>
      {selected ? <ImageDetailsDialog
        image={selected}
        onClose={handleDetailsClose}
      /> : null}
      <div className={style.search}>
        <Search
          onSubmit={handleSearchSubmit}
        />
      </div>
      <ImagesList
        images={beers}
        onImageClick={handleImageClick} />
      {!searchText ?
        <BottomPagingNav pageIndex={pageIndex} pages={Math.ceil(100 / PER_PAGE)} />
        : null
      }
    </>
  )
}
