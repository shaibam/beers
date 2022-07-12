import { configureStore } from '@reduxjs/toolkit'
import beersSlice from './feature/beers/slice/beersSlice'

export default configureStore({
    reducer: { beers: beersSlice },
})