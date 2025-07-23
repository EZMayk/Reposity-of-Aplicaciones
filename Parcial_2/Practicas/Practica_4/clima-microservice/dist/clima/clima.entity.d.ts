export declare class Clima {
    id: number;
    temperatura: number;
    humedad: number;
    precipitacion: number;
    velocidadViento: number;
    direccionViento: string;
    presionAtmosferica: number;
    fecha: Date;
    ubicacion: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Clima>);
}
