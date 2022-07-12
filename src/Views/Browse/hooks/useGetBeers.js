import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllBeers from '../../../APIs/getAllBeers';
import { addPage } from '../../../redux/feature/beers/slice/beersSlice';
import store from '../../../redux/store';

export default function useGetBeers(pageIndex = 1, searchText = '') {
    const dispatch = useDispatch();
    const [beers, setBeers] = useState(null);
    const isAliveRef = useRef(true)

    const fetchBeers = () => {
        const beersGlobalState = store.getState().beers.value;
        console.log({ beersGlobalState })
        if (!beersGlobalState?.[pageIndex])
            getAllBeers(pageIndex, searchText)
                .then((data) => {
                    if (!isAliveRef.current) return;
                    setBeers(data);
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
    }, [pageIndex, searchText])

    return beers
}
