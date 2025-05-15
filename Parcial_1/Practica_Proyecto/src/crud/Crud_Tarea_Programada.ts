import { appdataSource } from "../data-source";
import { TareaProgramada } from "../models/Tarea_Programada";

export const insertarTarea = async (frecuencia_min: number, ultima_ejecucion: Date) => {
    const tarea = new TareaProgramada();
    tarea.frecuencia_min = frecuencia_min;
    tarea.ultima_ejecucion = ultima_ejecucion;
    return await appdataSource.manager.save(tarea);
};

export const obtenerTareas = async () => {
    return await appdataSource.manager.find(TareaProgramada);
};

export const obtenerTarea = async (id: number) => {
    return await appdataSource.manager.findOne(TareaProgramada, { where: { id } });
};

export const actualizarTarea = async (id: number, frecuencia_min: number, ultima_ejecucion: Date) => {
    const tarea = await obtenerTarea(id);
    if (tarea) {
        tarea.frecuencia_min = frecuencia_min;
        tarea.ultima_ejecucion = ultima_ejecucion;
        return await appdataSource.manager.save(tarea);
    }
    return null;
};

export const eliminarTarea = async (id: number) => {
    const tarea = await obtenerTarea(id);
    if (tarea) {
        return await appdataSource.manager.remove(tarea);
    }
    return null;
};
