import { useSelector } from 'react-redux';
import { getAllFavorites } from '../../../redux/selectors';

export default function useGetBeers() {
    const beers = useSelector(state => getAllFavorites(state));    
    return beers
}
