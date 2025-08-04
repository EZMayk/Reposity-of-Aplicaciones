import { Usuario } from '../entities/usuario.entity';
import { Mascota } from '../entities/mascota.entity';
import { FormularioAdopcion } from '../entities/formulario-adopcion.entity';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

interface DatabaseData {
  usuarios: any[];
  mascotas: any[];
  formulariosAdopcion: any[];
}

export class DatabaseService {
  private static instance: DatabaseService;
  private usuarios: Usuario[] = [];
  private mascotas: Mascota[] = [];
  private formulariosAdopcion: FormularioAdopcion[] = [];
  private readonly dbPath = path.join(__dirname, 'database.json');

  private constructor() {
    this.loadData();
    this.seedData();
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  private loadData(): void {
    try {
      if (fs.existsSync(this.dbPath)) {
        const data = fs.readFileSync(this.dbPath, 'utf-8');
        const parsedData: DatabaseData = JSON.parse(data);
        
        this.usuarios = parsedData.usuarios || [];
        this.mascotas = parsedData.mascotas || [];
        this.formulariosAdopcion = parsedData.formulariosAdopcion || [];
      }
    } catch (error) {
      console.log('No se pudieron cargar los datos existentes, comenzando con datos vacíos');
      this.usuarios = [];
      this.mascotas = [];
      this.formulariosAdopcion = [];
    }
  }

  private saveData(): void {
    try {
      const data: DatabaseData = {
        usuarios: this.usuarios,
        mascotas: this.mascotas,
        formulariosAdopcion: this.formulariosAdopcion,
      };
      fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error guardando datos:', error);
    }
  }

  private seedData(): void {
    // Solo crear datos de ejemplo si no existen
    if (this.usuarios.length === 0) {
      this.usuarios = [
        {
          id: uuidv4(),
          nombreCompleto: 'María González',
          email: 'maria@example.com',
          telefono: '+1234567890',
          direccion: 'Calle Principal 123',
        },
        {
          id: uuidv4(),
          nombreCompleto: 'Carlos Rodríguez',
          email: 'carlos@example.com',
          telefono: '+1234567891',
          direccion: 'Avenida Central 456',
        },
      ];
    }

    if (this.mascotas.length === 0) {
      this.mascotas = [
        {
          id: uuidv4(),
          nombre: 'Buddy',
          especie: 'Perro',
          raza: 'Golden Retriever',
          edad: 3,
          disponible: true,
        },
        {
          id: uuidv4(),
          nombre: 'Luna',
          especie: 'Gato',
          raza: 'Siamés',
          edad: 2,
          disponible: true,
        },
        {
          id: uuidv4(),
          nombre: 'Max',
          especie: 'Perro',
          raza: 'Pastor Alemán',
          edad: 5,
          disponible: false,
        },
      ];
    }

    this.saveData();
  }

  // Métodos para Usuarios
  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuarioById(id: string): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  getUsuarioByEmail(email: string): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.email === email);
  }

  addUsuario(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    this.saveData();
    return usuario;
  }

  updateUsuario(id: string, updateData: Partial<Omit<Usuario, 'id'>>): Usuario | undefined {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return undefined;

    this.usuarios[index] = { ...this.usuarios[index], ...updateData };
    this.saveData();
    return this.usuarios[index];
  }

  deleteUsuario(id: string): boolean {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return false;

    this.usuarios.splice(index, 1);
    this.saveData();
    return true;
  }

  // Métodos para Mascotas
  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  getMascotasDisponibles(): Mascota[] {
    return this.mascotas.filter(mascota => mascota.disponible);
  }

  getMascotaById(id: string): Mascota | undefined {
    return this.mascotas.find(mascota => mascota.id === id);
  }

  addMascota(mascota: Mascota): Mascota {
    this.mascotas.push(mascota);
    this.saveData();
    return mascota;
  }

  updateMascota(id: string, updateData: Partial<Omit<Mascota, 'id'>>): Mascota | undefined {
    const index = this.mascotas.findIndex(mascota => mascota.id === id);
    if (index === -1) return undefined;

    this.mascotas[index] = { ...this.mascotas[index], ...updateData };
    this.saveData();
    return this.mascotas[index];
  }

  deleteMascota(id: string): boolean {
    const index = this.mascotas.findIndex(mascota => mascota.id === id);
    if (index === -1) return false;

    this.mascotas.splice(index, 1);
    this.saveData();
    return true;
  }

  // Métodos para Formularios de Adopción
  getFormulariosAdopcion(): FormularioAdopcion[] {
    return this.formulariosAdopcion;
  }

  getFormularioAdopcionById(id: string): FormularioAdopcion | undefined {
    return this.formulariosAdopcion.find(formulario => formulario.id === id);
  }

  getFormulariosAdopcionByUsuario(usuarioId: string): FormularioAdopcion[] {
    return this.formulariosAdopcion.filter(formulario => formulario.usuarioId === usuarioId);
  }

  getFormulariosAdopcionByMascota(mascotaId: string): FormularioAdopcion[] {
    return this.formulariosAdopcion.filter(formulario => formulario.mascotaId === mascotaId);
  }

  getFormulariosAdopcionByEstado(estado: EstadoSolicitud): FormularioAdopcion[] {
    return this.formulariosAdopcion.filter(formulario => formulario.estado === estado);
  }

  addFormularioAdopcion(formulario: FormularioAdopcion): FormularioAdopcion {
    this.formulariosAdopcion.push(formulario);
    this.saveData();
    return formulario;
  }

  updateEstadoFormularioAdopcion(id: string, estado: EstadoSolicitud): FormularioAdopcion | undefined {
    const index = this.formulariosAdopcion.findIndex(formulario => formulario.id === id);
    if (index === -1) return undefined;

    this.formulariosAdopcion[index].estado = estado;
    
    // Si se aprueba la adopción, marcar la mascota como no disponible
    if (estado === EstadoSolicitud.APROBADO) {
      const mascotaId = this.formulariosAdopcion[index].mascotaId;
      this.updateMascota(mascotaId, { disponible: false });
    }

    this.saveData();
    return this.formulariosAdopcion[index];
  }

  deleteFormularioAdopcion(id: string): boolean {
    const index = this.formulariosAdopcion.findIndex(formulario => formulario.id === id);
    if (index === -1) return false;

    this.formulariosAdopcion.splice(index, 1);
    this.saveData();
    return true;
  }

  // Método para verificar si existe un formulario pendiente
  existeFormularioPendiente(usuarioId: string, mascotaId: string): boolean {
    return this.formulariosAdopcion.some(
      formulario => 
        formulario.usuarioId === usuarioId && 
        formulario.mascotaId === mascotaId && 
        formulario.estado === EstadoSolicitud.PENDIENTE
    );
  }

  // Métodos de estadísticas
  getEstadisticas() {
    const totalUsuarios = this.usuarios.length;
    const totalMascotas = this.mascotas.length;
    const mascotasDisponibles = this.mascotas.filter(m => m.disponible).length;
    const mascotasAdoptadas = this.mascotas.filter(m => !m.disponible).length;
    const totalFormularios = this.formulariosAdopcion.length;
    const formulariosPendientes = this.formulariosAdopcion.filter(f => f.estado === EstadoSolicitud.PENDIENTE).length;
    const formulariosAprobados = this.formulariosAdopcion.filter(f => f.estado === EstadoSolicitud.APROBADO).length;
    const formulariosRechazados = this.formulariosAdopcion.filter(f => f.estado === EstadoSolicitud.RECHAZADO).length;

    return {
      usuarios: {
        total: totalUsuarios,
      },
      mascotas: {
        total: totalMascotas,
        disponibles: mascotasDisponibles,
        adoptadas: mascotasAdoptadas,
      },
      formularios: {
        total: totalFormularios,
        pendientes: formulariosPendientes,
        aprobados: formulariosAprobados,
        rechazados: formulariosRechazados,
      },
    };
  }
}
