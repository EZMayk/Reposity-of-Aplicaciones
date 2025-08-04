# 🐾 Sistema de Adopción de Mascotas - API GraphQL

## 📋 Descripción
API GraphQL desarrollada con NestJS y TypeScript para gestionar un sistema de adopción de mascotas. Utiliza Apollo Server y persistencia en archivos JSON.

## ✨ Características
- 🔍 **Consultas GraphQL** para usuarios, mascotas y formularios de adopción
- ✏️ **Mutaciones GraphQL** para crear y gestionar entidades
- 🔗 **Field Resolvers** para relaciones automáticas entre entidades
- ✅ **Validación completa** de datos con class-validator
- 💾 **Persistencia JSON** con sincronización automática
- 🎮 **GraphQL Playground** integrado para pruebas

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v16 o superior)
- npm

### Instalación
```bash
npm install
```

### Ejecución
```bash
# Modo desarrollo (con hot reload)
npm run start:dev

# Modo producción
npm run start:prod

# Compilar proyecto
npm run build
```

El servidor estará disponible en: **http://localhost:3000/graphql**

## 🛠️ Tecnologías Utilizadas
- **NestJS** - Framework Node.js
- **GraphQL** - Query language y runtime
- **Apollo Server** - Servidor GraphQL
- **TypeScript** - Lenguaje tipado
- **class-validator** - Validación de entrada
- **class-transformer** - Transformación de objetos
- **uuid** - Generación de identificadores únicos

## 📊 Esquema de Datos

### 👤 Usuario
```typescript
interface Usuario {
  id: string
  nombreCompleto: string
  email: string
  telefono: string
  direccion: string
}
```

### 🐕 Mascota
```typescript
interface Mascota {
  id: string
  nombre: string
  especie: string
  raza: string
  edad: number
  disponible: boolean
}
```

### 📝 Formulario de Adopción
```typescript
interface FormularioAdopcion {
  id: string
  usuarioId: string
  mascotaId: string
  haTenidoMascotasAntes: boolean
  tipoVivienda: string
  fechaSolicitud: Date
  estado: 'PENDIENTE' | 'APROBADO' | 'RECHAZADO'
}
```

## 💾 Datos de Prueba Actuales

### Usuarios en el sistema:
- **Juan Pérez** (ID: 550e8400-e29b-41d4-a716-446655440001)
- **María González** (ID: 550e8400-e29b-41d4-a716-446655440002)

### Mascotas disponibles:
- **Max** - Perro Golden Retriever, 3 años (ID: 660e8400-e29b-41d4-a716-446655440001) ✅ Disponible
- **Luna** - Gato Siamés, 2 años (ID: 660e8400-e29b-41d4-a716-446655440002) ✅ Disponible  
- **Rocky** - Perro Pastor Alemán, 5 años (ID: 660e8400-e29b-41d4-a716-446655440003) ❌ No disponible
- **Mimi** - Gato Persa, 1 año (ID: 660e8400-e29b-41d4-a716-446655440004) ✅ Disponible

### Formularios existentes:
- **Formulario aprobado** de Juan Pérez para adoptar a Rocky

## 🧪 Consultas y Mutaciones de Prueba

### 📋 **CONSULTAS (Queries)**

#### Obtener todos los usuarios
```graphql
query {
  usuarios {
    id
    nombreCompleto
    email
    telefono
    direccion
  }
}
```

#### Obtener todas las mascotas
```graphql
query {
  mascotas {
    id
    nombre
    especie
    raza
    edad
    disponible
  }
}
```

#### Obtener solo mascotas disponibles
```graphql
query {
  mascotasDisponibles {
    id
    nombre
    especie
    raza
    edad
    disponible
  }
}
```

#### Obtener mascota específica
```graphql
query {
  mascota(id: "660e8400-e29b-41d4-a716-446655440001") {
    id
    nombre
    especie
    raza
    edad
    disponible
  }
}
```

#### Obtener formularios con relaciones
```graphql
query {
  formularios {
    id
    fechaSolicitud
    estado
    haTenidoMascotasAntes
    tipoVivienda
    usuario {
      nombreCompleto
      email
    }
    mascota {
      nombre
      especie
      raza
    }
  }
}
```

#### Obtener formularios de un usuario específico
```graphql
query {
  formulariosPorUsuario(usuarioId: "550e8400-e29b-41d4-a716-446655440001") {
    id
    estado
    fechaSolicitud
    mascota {
      nombre
      especie
    }
  }
}
```

### ✏️ **MUTACIONES (Mutations)**

#### Crear nuevo usuario
```graphql
mutation {
  crearUsuario(input: {
    nombreCompleto: "Carlos Mendoza"
    email: "carlos.mendoza@email.com"
    telefono: "+56911223344"
    direccion: "Calle Nueva 789, Santiago"
  }) {
    id
    nombreCompleto
    email
  }
}
```

#### Crear nueva mascota
```graphql
mutation {
  crearMascota(input: {
    nombre: "Toby"
    especie: "Perro"
    raza: "Beagle"
    edad: 2
  }) {
    id
    nombre
    especie
    raza
    edad
    disponible
  }
}
```

#### Crear formulario de adopción
```graphql
mutation {
  crearFormulario(input: {
    usuarioId: "550e8400-e29b-41d4-a716-446655440002"
    mascotaId: "660e8400-e29b-41d4-a716-446655440001"
    haTenidoMascotasAntes: false
    tipoVivienda: "Apartamento con balcón"
  }) {
    id
    estado
    fechaSolicitud
    usuario {
      nombreCompleto
    }
    mascota {
      nombre
      especie
    }
  }
}
```

#### Aprobar formulario (usar ID del formulario creado)
```graphql
mutation {
  aprobarFormulario(id: "ID_DEL_FORMULARIO_AQUI") {
    id
    estado
    mascota {
      nombre
      disponible
    }
  }
}
```

#### Rechazar formulario
```graphql
mutation {
  rechazarFormulario(id: "ID_DEL_FORMULARIO_AQUI") {
    id
    estado
  }
}
```

## 🔍 **Consultas de Prueba Específicas con Datos Reales**

### Probar con usuarios existentes:
```graphql
query {
  usuario(id: "550e8400-e29b-41d4-a716-446655440001") {
    nombreCompleto
    email
    telefono
  }
}
```

### Adoptar mascota específica:
```graphql
mutation {
  crearFormulario(input: {
    usuarioId: "550e8400-e29b-41d4-a716-446655440002"
    mascotaId: "660e8400-e29b-41d4-a716-446655440002"
    haTenidoMascotasAntes: true
    tipoVivienda: "Casa con jardín grande"
  }) {
    id
    estado
    usuario {
      nombreCompleto
    }
    mascota {
      nombre
      raza
    }
  }
}
```

## ⚠️ **Reglas de Validación**

- **Email**: Debe ser único y tener formato válido
- **UUIDs**: Deben ser válidos para usuarios y mascotas
- **Edad**: Debe ser un número positivo
- **Mascotas**: Solo las disponibles pueden ser adoptadas
- **Formularios**: No se permiten duplicados pendientes para la misma mascota
- **Estados**: Solo formularios pendientes pueden cambiar de estado

## 📁 **Estructura del Proyecto**
```
src/
├── data/
│   ├── database.service.ts    # Servicio de persistencia
│   ├── database.json         # Datos en tiempo de ejecución
│   └── data.json            # Datos de respaldo
├── interfaces/              # Contratos TypeScript
├── types/                  # ObjectTypes GraphQL
├── inputs/                 # InputTypes GraphQL  
├── resolvers/              # Lógica de negocio GraphQL
├── app.module.ts          # Configuración principal
└── main.ts               # Punto de entrada
```

## 🎮 **Cómo Probar**

1. **Inicia el servidor**: `npm run start:dev`
2. **Abre el playground**: http://localhost:3000/graphql
3. **Ejecuta consultas**: Copia y pega las consultas de arriba
4. **Explora el schema**: Usa la documentación del playground
5. **Prueba mutaciones**: Crea nuevos datos y verifica los cambios

## 📝 **Datos de Prueba JSON**

Si necesitas los datos en formato JSON para herramientas externas:

```json
{
  "usuarios": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "nombreCompleto": "Juan Pérez",
      "email": "juan.perez@email.com",
      "telefono": "+56912345678",
      "direccion": "Av. Las Condes 123, Santiago"
    }
  ],
  "mascotas": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440001",
      "nombre": "Max",
      "especie": "Perro",
      "raza": "Golden Retriever",
      "edad": 3,
      "disponible": true
    }
  ]
}
```

---

**¡Listo para adoptar! 🐕🐱**
