import config from "./config"

const getAllBeers=()=>{
    return fetch(`${config.endpoint}beers`)
    .then(r=>r.json())    
}

export default getAllBeers