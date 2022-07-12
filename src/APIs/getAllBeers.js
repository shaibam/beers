import config from "./config"

const PER_PAGE = 12;
const getAllBeers = (page = 1, foodPairingText = '') => {
    return fetch(`${config.endpoint}beers?page=${page}&per_page=${PER_PAGE}${foodPairingText ? '&food=' + foodPairingText : ''}`)
        .then(r => r.json())
}

export default getAllBeers