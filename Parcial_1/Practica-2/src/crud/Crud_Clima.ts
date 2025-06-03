import { appdataSource } from "../data-source";
import { Clima } from "../models/Clima";

export const insertarClima = async (temperatura: number, humedad: number, viento: number, fecha: Date, ubicacion: string) => {
    const clima = new Clima();
    clima.temperatura = temperatura;
    clima.humedad = humedad;
    clima.viento = viento;
    clima.fecha = fecha;
    clima.ubicacion = ubicacion;
    return await appdataSource.manager.save(clima);
};

export const obtenerClimas = async () => {
    return await appdataSource.manager.find(Clima);
};

export const obtenerClima = async (id: number) => {
    return await appdataSource.manager.findOne(Clima, { where: { id } });
};

export const actualizarClima = async (id: number, temperatura: number, humedad: number, viento: number, fecha: Date, ubicacion: string) => {
    const clima = await obtenerClima(id);
    if (clima) {
        clima.temperatura = temperatura;
        clima.humedad = humedad;
        clima.viento = viento;
        clima.fecha = fecha;
        clima.ubicacion = ubicacion;
        return await appdataSource.manager.save(clima);
    }
    return null;
};

export const eliminarClima = async (id: number) => {
    const clima = await obtenerClima(id);
    if (clima) {
        return await appdataSource.manager.remove(clima);
    }
    return null;
};
