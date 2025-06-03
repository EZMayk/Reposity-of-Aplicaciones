import { appdataSource } from "../data-source";
import { Notificacion } from "../models/Notificacion";
import { obtenerAlerta } from "../crud/Crud_Alerta";

// Crear una notificación
export const insertarNotificacion = async (
    alerta_id: number,
    mensaje: string,
    leido: boolean,
    enviada_en: Date
) => {
    const alerta = await obtenerAlerta(alerta_id);
    if (!alerta) return null;

    const notificacion = new Notificacion();
    notificacion.alerta = alerta;
    notificacion.mensaje = mensaje;
    notificacion.leido = leido;
    notificacion.enviada_en = enviada_en;
    return await appdataSource.manager.save(notificacion);
};

// Obtener todas
export const obtenerNotificaciones = async () => {
    return await appdataSource.manager.find(Notificacion, {
        relations: ["alerta"],
    });
};

// Obtener una
export const obtenerNotificacion = async (id: number) => {
    return await appdataSource.manager.findOne(Notificacion, {
        where: { id },
        relations: ["alerta"],
    });
};

// Actualizar
export const actualizarNotificacion = async (
    id: number,
    mensaje: string,
    leido: boolean,
    enviada_en: Date
) => {
    const notificacion = await obtenerNotificacion(id);
    if (notificacion) {
        notificacion.mensaje = mensaje;
        notificacion.leido = leido;
        notificacion.enviada_en = enviada_en;
        return await appdataSource.manager.save(notificacion);
    }
    return null;
};

// Eliminar
export const eliminarNotificacion = async (id: number) => {
    const notificacion = await obtenerNotificacion(id);
    if (notificacion) {
        return await appdataSource.manager.remove(notificacion);
    }
    return null;
};
