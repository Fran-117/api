import axios from 'axios';

const personajes = 'https://rickandmortyapi.com/api/character'


export const getPersonajes = async () => {
    try{
        const response = await axios.get(`${personajes}`);
        return response.data.results;
    } catch (error) {
        console.error('Error en la petición personajes:', error);
        return [];
    }
};

