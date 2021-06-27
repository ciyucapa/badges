import axios from 'axios';

const getPersonajes = () => {
    return axios({
       url:'https://rickandmortyapi.com/api/character',
        method: 'get',
    })
}

export default {
    getPersonajes,
}
