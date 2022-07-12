import { createSelector } from '@reduxjs/toolkit'
import _ from 'lodash';

const getBeersPages = (state) => {
    return state.beers.value
};

const getFavorites = (state) => {
    return state.favorites.value
};

export const getAllBeers = createSelector(
    [getBeersPages, getFavorites],
    (beersPages, favoritesIds) => {        
        const b = _.map(beersPages, (beers) => {
            return _.map(beers, (beer) => {                
                return { ...beer, favorite: _.indexOf(favoritesIds, beer.id)!==-1 ? true : false }
            })
        })        
        return b;
    }
)

export const getAllFavorites = createSelector(
    [getBeersPages, getFavorites],
    (beersPages, favoritesIds) => {
        const flat = _.flatten(beersPages);
        const keyed = _.keyBy(flat, 'id');
        const b = _.map(favoritesIds, id => keyed[id])
        return b;
    }
)
