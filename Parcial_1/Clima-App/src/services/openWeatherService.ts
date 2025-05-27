import axios from 'axios';

const API_KEY = 'b5b55c33237820537cccdfc4bef6ee6c';  // <-- reemplaza con tu clave real
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const obtenerClimaPorCiudad = async (ciudad: string) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: ciudad,
            appid: API_KEY,
            units: 'metric',
            lang: 'es'
        }
    });
    return response.data;
};
