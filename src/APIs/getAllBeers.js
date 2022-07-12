import config from "./config"

const PER_PAGE = 12;
const getAllBeers = (page=1) => {
    return fetch(`${config.endpoint}beers?page=${page}&per_page=${PER_PAGE}`)
        .then(r => r.json())
}

export default getAllBeers