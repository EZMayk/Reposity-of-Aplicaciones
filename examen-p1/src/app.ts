import express from 'express';
import router from './interfaces/routes';
import { AppDataSource } from './config/data-source';

const app = express();
app.use(express.json());

// Conexión al DataSource
AppDataSource.initialize().then(() => {
    console.log('DataSource inicializado correctamente.');

    // Rutas base
    app.use('/api', router);

    // Iniciar servidor
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
}).catch(error => console.error('Error al inicializar el DataSource:', error));
