import React, { useEffect, useRef, useState } from 'react'
import getAllBeers from '../../../APIs/getAllBeers';

export default function useGetBeers() {
    const [beers, setBeers] = useState(null);
    const isAliveRef = useRef(true)

    const fetchBeers = () => {
        getAllBeers()
            .then((d) => {
                if (!isAliveRef.current) return;
                setBeers(d);
            })
            .catch(() => {
                fetchBeers(); //Error handling - retry
            })
    }

    useEffect(() => {
        fetchBeers()
        return () => {
            isAliveRef.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return beers
}
