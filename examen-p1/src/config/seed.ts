import { AppDataSource } from './data-source';
import { Pelicula } from '../domain/entities/PeliculaEntity';
import { Funcion } from '../domain/entities/FuncionEntity';
import { Sala } from '../domain/entities/SalaEntity';

export async function cargarDatosIniciales() {
    const peliculaRepo = AppDataSource.getRepository(Pelicula);
    const funcionRepo = AppDataSource.getRepository(Funcion);
    const salaRepo = AppDataSource.getRepository(Sala);

    // Si Sala tiene id generado manual, está bien asignarlo. Si no, quítalo.
    const sala1 = salaRepo.create({ id: 'sala1', nombre: 'Sala 1', capacidad: 50 });
    const sala2 = salaRepo.create({ id: 'sala2', nombre: 'Sala 2', capacidad: 100 });

    await salaRepo.save([sala1, sala2]);

    // No asignar id manual, y cambiar descripcion por sinopsis
    const pelicula1 = peliculaRepo.create({ titulo: 'Inception', sinopsis: 'Una película de sueños', posterUrl: '', activa: true });
    const pelicula2 = peliculaRepo.create({ titulo: 'Interestelar', sinopsis: 'Viajes espaciales', posterUrl: '', activa: true });

    await peliculaRepo.save([pelicula1, pelicula2]);

const funcion1 = funcionRepo.create({
    pelicula: pelicula1,
    sala: sala1,
    fechaHora: new Date('2025-06-10T18:00:00'),
    entradasDisponibles: 50,
    activa: true, // Opcional, si quieres establecer el valor
});

const funcion2 = funcionRepo.create({
    pelicula: pelicula2,
    sala: sala2,
    fechaHora: new Date('2025-06-11T20:00:00'),
    entradasDisponibles: 100,
    activa: true,
});

    await funcionRepo.save([funcion1, funcion2]);

    console.log('✔️ Datos iniciales cargados');
}
