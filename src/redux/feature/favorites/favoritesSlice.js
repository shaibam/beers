import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: null,
    },
    reducers: {
        add: (state, { payload }) => {            
            const s = [...(state.value || [])];
            if (!_.find(s, payload.id)) {
                s.push(payload.id)
                state.value = s;                
            }
        },
        remove: (state, { payload }) => {
            const s = [...(state.value || [])];
            if (!_.find(s, payload.id)) {
                state.value = _.without(s, payload.id);;
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { add,remove } = favoritesSlice.actions

export default favoritesSlice.reducer