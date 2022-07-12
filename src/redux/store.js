import { configureStore } from '@reduxjs/toolkit'
import beersSlice from './feature/beers/slice/beersSlice'
import favoritesSlice from './feature/favorites/favoritesSlice'

export default configureStore({
    reducer: {
        beers: beersSlice,
        favorites: favoritesSlice
    },
})