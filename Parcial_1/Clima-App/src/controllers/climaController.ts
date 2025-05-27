import { Request, Response } from 'express';
import { obtenerClimaPorCiudad } from '../services/openWeatherService';

export const obtenerClima = async (req: Request, res: Response) => {
    const ciudad = req.params.ciudad;
    try {
        const datosClima = await obtenerClimaPorCiudad(ciudad);
        res.json(datosClima);
    } catch (error: any) {
        console.error('Error al obtener datos del clima:', error.message);

        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'Ciudad no encontrada' });
        } else if (error.response && error.response.status === 401) {
            res.status(401).json({ error: 'API Key inválida' });
        } else {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};
