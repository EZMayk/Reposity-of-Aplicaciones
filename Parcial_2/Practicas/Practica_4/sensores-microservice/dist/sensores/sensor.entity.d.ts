export declare class Sensor {
    id: number;
    tipo: string;
    ubicacion: string;
    estado: string;
    valor: number;
    unidad: string;
    fechaLectura: Date;
    cultivoId: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Sensor>);
}
