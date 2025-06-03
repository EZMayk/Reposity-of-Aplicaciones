import { initDatabase } from "./database";

// Clima
import { insertarClima } from "./crud/Crud_Clima";
// Tarea
import { insertarTarea } from "./crud/Crud_Tarea_Programada";
// Consulta API
import { insertarConsultaAPI } from "./crud/Crud_APIClima";
// Alerta
import { insertarAlerta } from "./crud/Crud_Alerta";
// Notificación
import { insertarNotificacion } from "./crud/Crud_Notificacion";

async function main() {
    await initDatabase();

    // ======= Climas =======
    const climas = [];
    for (let i = 0; i < 5; i++) {
        const clima = await insertarClima(
            25 + i,
            60 + i,
            10 + i,
            new Date(),
            `Ciudad ${i}`
        );
        climas.push(clima);
        console.log("Clima insertado:", clima);
    }

    // ======= Tareas =======
    const tareas = [];
    for (let i = 0; i < 5; i++) {
        const tarea = await insertarTarea(30 + i * 5, new Date());
        tareas.push(tarea);
        console.log("Tarea insertada:", tarea);
    }

    // ======= Consultas API =======
    const consultas = [];
    for (let i = 0; i < 5; i++) {
        const consulta = await insertarConsultaAPI(climas[i].id, tareas[i].id, new Date());
        consultas.push(consulta);
        console.log("Consulta API insertada:", consulta);
    }

    // ======= Alertas =======
    const alertas = [];
    for (let i = 0; i < 5; i++) {
        const alerta = await insertarAlerta(
            `Evento ${i}`,
            `Mensaje de alerta ${i}`,
            new Date(),
            i % 2 === 0 ? "Alta" : "Media",
            `Ubicación ${i}`
        );
        alertas.push(alerta);
        console.log("Alerta insertada:", alerta);
    }

    // ======= Notificaciones =======
    for (let i = 0; i < 5; i++) {
        const notificacion = await insertarNotificacion(
            alertas[i].id,
            `Mensaje notificación ${i}`,
            false,
            new Date()
        );
        console.log("Notificación insertada:", notificacion);
    }

    console.log("✅ Registros de prueba insertados con éxito.");
}

main();
