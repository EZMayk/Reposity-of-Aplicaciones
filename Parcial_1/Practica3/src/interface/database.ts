import {AppDataSource} from './data-source';
import 'reflect-metadata';
export const iniciar = async() => {
    try{
        await AppDataSource.initialize();
        console.log("Base de datos inicializada correctamente");
        return AppDataSource;
    }
    catch(ex){
        console.log("Error al iniciar la base de datos: ") 
        throw(ex)
    }
}