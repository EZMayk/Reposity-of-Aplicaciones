import { appdataSource } from "../data-source";
import { ConsultaAPI } from "../models/APIClima";
import { obtenerClima } from "./Crud_Clima";
import { obtenerTarea } from "./Crud_Tarea_Programada";

export const insertarConsultaAPI = async (climaId: number, tareaId: number, realizada_en: Date) => {
    const consulta = new ConsultaAPI();
    const clima = await obtenerClima(climaId);
    const tarea = await obtenerTarea(tareaId);
    if (clima && tarea) {
        consulta.clima = clima;
        consulta.tarea = tarea;
        consulta.realizada_en = realizada_en;
        return await appdataSource.manager.save(consulta);
    }
    return null;
};

export const obtenerConsultasAPI = async () => {
    return await appdataSource.manager.find(ConsultaAPI, { relations: ["clima", "tarea"] });
};

export const obtenerConsultaAPI = async (id: number) => {
    return await appdataSource.manager.findOne(ConsultaAPI, {
        where: { id },
        relations: ["clima", "tarea"]
    });
};

export const eliminarConsultaAPI = async (id: number) => {
    const consulta = await obtenerConsultaAPI(id);
    if (consulta) {
        return await appdataSource.manager.remove(consulta);
    }
    return null;
};
