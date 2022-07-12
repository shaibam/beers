import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllBeers from '../../../APIs/getAllBeers';
import { getAllBeers as getAllBeersSelector } from '../../../redux/selectors';
import { addPage } from '../../../redux/feature/beers/slice/beersSlice';
import store from '../../../redux/store'

export default function useGetBeers(pageIndex = 1, searchText = '') {
    const favoriteIds = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const [beers, setBeers] = useState(null);
    const isAliveRef = useRef(true)

    const fetchBeers = () => {
        const beersGlobalState = getAllBeersSelector(store.getState());
        debugger;
        if (!beersGlobalState?.[pageIndex]?.length || searchText)
            getAllBeers(pageIndex, searchText)
                .then((data) => {
                    if (!isAliveRef.current) return;
                    setBeers(data);
                    if (!searchText)
                        dispatch(addPage({ pageIndex, data }));
                })
                .catch(() => {
                    fetchBeers(); //Error handling - retry
                })
        else
            setBeers(beersGlobalState[pageIndex])
    }

    useEffect(() => {
        isAliveRef.current = true;

        fetchBeers();
        return () => {
            isAliveRef.current = false;
        }
        // eslint-disable-next-line 
    }, [pageIndex, searchText, favoriteIds])

    return beers
}
