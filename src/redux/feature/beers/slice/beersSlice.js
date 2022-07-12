import { createSlice } from '@reduxjs/toolkit'

export const beersSlice = createSlice({
    name: 'beers',
    initialState: {
        value: null,
    },
    reducers: {
        addPage: (state, { payload }) => {            
            const s = [...(state.value || [])];
            s[payload.pageIndex] = payload.data;            
            state.value = s;            
        }
    },
})

// Action creators are generated for each case reducer function
export const { addPage } = beersSlice.actions

export default beersSlice.reducer