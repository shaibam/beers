import { useEffect, useRef, useState } from 'react'
import getAllBeers from '../../../APIs/getAllBeers';

export default function useGetBeers(pageIndex = 1, searchText = '') {
    const [beers, setBeers] = useState(null);
    const isAliveRef = useRef(true)

    const fetchBeers = () => {
        getAllBeers(pageIndex, searchText)
            .then((d) => {
                if (!isAliveRef.current) return;
                setBeers(d);
            })
            .catch(() => {
                fetchBeers(); //Error handling - retry
            })
    }

    useEffect(() => {
        isAliveRef.current = true;
        fetchBeers();
        return () => {
            isAliveRef.current = false;
            console.log('unmount')
        }
        // eslint-disable-next-line 
    }, [pageIndex, searchText])

    return beers
}
