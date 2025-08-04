import { Injectable } from '@nestjs/common';
import { Usuario } from '../types/usuario.type';
import { Mascota } from '../types/mascota.type';
import { FormularioAdopcion } from '../types/formulario-adopcion.type';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import * as fs from 'fs';
import * as path from 'path';

interface DatabaseData {
  usuarios: any[];
  mascotas: any[];
  formulariosAdopcion: any[];
}

@Injectable()
export class DatabaseService {
  private static instance: DatabaseService;
  private usuarios: Usuario[] = [];
  private mascotas: Mascota[] = [];
  private formulariosAdopcion: FormularioAdopcion[] = [];
  private readonly dbPath = path.join(__dirname, 'database.json');
  private readonly srcDbPath = path.join(__dirname, '../../src/data/database.json');

  constructor() {
    this.loadData();
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
        const data = fs.readFileSync(this.dbPath, 'utf8');
        const parsedData: DatabaseData = JSON.parse(data);
        
        // Cargar usuarios
        this.usuarios = parsedData.usuarios.map(u => 
          new Usuario(u.id, u.nombreCompleto, u.email, u.telefono, u.direccion)
        );
        
        // Cargar mascotas
        this.mascotas = parsedData.mascotas.map(m => 
          new Mascota(m.id, m.nombre, m.especie, m.raza, m.edad, m.disponible)
        );
        
        // Cargar formularios
        this.formulariosAdopcion = parsedData.formulariosAdopcion.map(f => 
          new FormularioAdopcion(
            f.id,
            f.usuarioId,
            f.mascotaId,
            f.haTenidoMascotasAntes,
            f.tipoVivienda,
            new Date(f.fechaSolicitud),
            f.estado as EstadoSolicitud
          )
        );
      } else {
        this.initializeData();
      }
    } catch (error) {
      console.error('Error cargando datos:', error);
      this.initializeData();
    }
  }

  private initializeData(): void {
    // Datos iniciales de ejemplo
    this.usuarios = [
      new Usuario(
        '550e8400-e29b-41d4-a716-446655440001',
        'Juan Pérez',
        'juan.perez@email.com',
        '+56912345678',
        'Av. Las Condes 123, Santiago'
      ),
      new Usuario(
        '550e8400-e29b-41d4-a716-446655440002',
        'María González',
        'maria.gonzalez@email.com',
        '+56987654321',
        'Calle Providencia 456, Santiago'
      )
    ];

    this.mascotas = [
      new Mascota(
        '660e8400-e29b-41d4-a716-446655440001',
        'Max',
        'Perro',
        'Golden Retriever',
        3,
        true
      ),
      new Mascota(
        '660e8400-e29b-41d4-a716-446655440002',
        'Luna',
        'Gato',
        'Siames',
        2,
        true
      ),
      new Mascota(
        '660e8400-e29b-41d4-a716-446655440003',
        'Rocky',
        'Perro',
        'Pastor Alemán',
        5,
        false
      ),
      new Mascota(
        '660e8400-e29b-41d4-a716-446655440004',
        'Mimi',
        'Gato',
        'Persa',
        1,
        true
      )
    ];

    this.formulariosAdopcion = [
      new FormularioAdopcion(
        '770e8400-e29b-41d4-a716-446655440001',
        '550e8400-e29b-41d4-a716-446655440001',
        '660e8400-e29b-41d4-a716-446655440003',
        true,
        'Casa con jardín',
        new Date('2024-01-15'),
        EstadoSolicitud.APROBADO
      )
    ];

    this.saveData();
  }

  private saveData(): void {
    try {
      const data: DatabaseData = {
        usuarios: this.usuarios.map(u => ({
          id: u.id,
          nombreCompleto: u.nombreCompleto,
          email: u.email,
          telefono: u.telefono,
          direccion: u.direccion
        })),
        mascotas: this.mascotas.map(m => ({
          id: m.id,
          nombre: m.nombre,
          especie: m.especie,
          raza: m.raza,
          edad: m.edad,
          disponible: m.disponible
        })),
        formulariosAdopcion: this.formulariosAdopcion.map(f => ({
          id: f.id,
          usuarioId: f.usuarioId,
          mascotaId: f.mascotaId,
          haTenidoMascotasAntes: f.haTenidoMascotasAntes,
          tipoVivienda: f.tipoVivienda,
          fechaSolicitud: f.fechaSolicitud.toISOString(),
          estado: f.estado
        }))
      };
      
      const jsonData = JSON.stringify(data, null, 2);
      
      // Guardar en el archivo compilado (dist)
      fs.writeFileSync(this.dbPath, jsonData, 'utf8');
      
      // También guardar en el archivo fuente (src) para sincronización
      if (fs.existsSync(this.srcDbPath)) {
        fs.writeFileSync(this.srcDbPath, jsonData, 'utf8');
      }
      
      console.log('💾 Datos guardados en JSON (GraphQL):', {
        usuarios: this.usuarios.length,
        mascotas: this.mascotas.length,
        formularios: this.formulariosAdopcion.length
      });
    } catch (error) {
      console.error('Error guardando datos:', error);
    }
  }

  // Métodos para usuarios
  public getUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  public getUsuarioById(id: string): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  public addUsuario(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    this.saveData();
    return usuario;
  }

  public getUsuarioByEmail(email: string): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.email === email);
  }

  // Métodos para mascotas
  public getMascotas(): Mascota[] {
    return [...this.mascotas];
  }

  public getMascotaById(id: string): Mascota | undefined {
    return this.mascotas.find(mascota => mascota.id === id);
  }

  public addMascota(mascota: Mascota): Mascota {
    this.mascotas.push(mascota);
    this.saveData();
    return mascota;
  }

  public getMascotasDisponibles(): Mascota[] {
    return this.mascotas.filter(mascota => mascota.disponible);
  }

  public updateMascotaDisponibilidad(id: string, disponible: boolean): Mascota | undefined {
    const mascota = this.getMascotaById(id);
    if (mascota) {
      mascota.disponible = disponible;
      this.saveData();
    }
    return mascota;
  }

  // Métodos para formularios de adopción
  public getFormulariosAdopcion(): FormularioAdopcion[] {
    return [...this.formulariosAdopcion];
  }

  public getFormularioById(id: string): FormularioAdopcion | undefined {
    return this.formulariosAdopcion.find(formulario => formulario.id === id);
  }

  public addFormularioAdopcion(formulario: FormularioAdopcion): FormularioAdopcion {
    this.formulariosAdopcion.push(formulario);
    this.saveData();
    return formulario;
  }

  public getFormulariosByUsuario(usuarioId: string): FormularioAdopcion[] {
    return this.formulariosAdopcion.filter(formulario => formulario.usuarioId === usuarioId);
  }

  public updateEstadoFormulario(id: string, estado: EstadoSolicitud): FormularioAdopcion | undefined {
    const formulario = this.getFormularioById(id);
    if (formulario) {
      formulario.estado = estado;
      this.saveData();
    }
    return formulario;
  }

  public existeFormularioPendiente(usuarioId: string, mascotaId: string): boolean {
    return this.formulariosAdopcion.some(
      formulario => 
        formulario.usuarioId === usuarioId && 
        formulario.mascotaId === mascotaId && 
        formulario.estado === EstadoSolicitud.PENDIENTE
    );
  }
}
