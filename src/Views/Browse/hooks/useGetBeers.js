import { useEffect, useRef, useState } from 'react'
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
        isAliveRef.current = true;
        fetchBeers();
        return () => {
            isAliveRef.current = false;
            console.log('unmount')
        }

    }, [])

    return beers
}
