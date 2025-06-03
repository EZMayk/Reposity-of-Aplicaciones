import { appdataSource } from "../data-source";
import { Alerta } from "../models/Alertas";

export const insertarAlerta = async (tipo_evento: string, mensaje: string, detectada_en: Date, nivel_riesgo: string, ubicacion: string) => {
    const alerta = new Alerta();
    alerta.tipo_evento = tipo_evento;
    alerta.mensaje = mensaje;
    alerta.detectada_en = detectada_en;
    alerta.nivel_riesgo = nivel_riesgo;
    alerta.ubicacion = ubicacion;
    return await appdataSource.manager.save(alerta);
};

export const obtenerAlertas = async () => {
    return await appdataSource.manager.find(Alerta);
};

export const obtenerAlerta = async (id: number) => {
    return await appdataSource.manager.findOne(Alerta, { where: { id } });
};

export const eliminarAlerta = async (id: number) => {
    const alerta = await obtenerAlerta(id);
    if (alerta) {
        return await appdataSource.manager.remove(alerta);
    }
    return null;
};
