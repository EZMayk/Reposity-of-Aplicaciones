# API de Adopción de Mascotas

Esta API REST permite gestionar un sistema de adopción de mascotas con usuarios, mascotas y formularios de adopción.

## Arquitectura

El proyecto sigue una arquitectura en capas:
- **Interfaces**: Definen los contratos de datos
- **Entidades**: Modelos de datos con lógica de negocio
- **DTOs**: Objetos de transferencia de datos con validaciones
- **Servicios**: Lógica de negocio
- **Controladores**: Endpoints REST
- **Data**: Simulación de persistencia de datos

## Endpoints

### Usuarios

#### Registrar Usuario
```
POST /usuarios
Content-Type: application/json

{
  "nombreCompleto": "Juan Pérez",
  "email": "juan.perez@email.com",
  "telefono": "+56912345678",
  "direccion": "Av. Las Condes 123, Santiago"
}
```

#### Listar Usuarios
```
GET /usuarios
```

#### Obtener Usuario por ID
```
GET /usuarios/{id}
```

### Mascotas

#### Crear Mascota
```
POST /mascotas
Content-Type: application/json

{
  "nombre": "Max",
  "especie": "Perro",
  "raza": "Golden Retriever",
  "edad": 3,
  "disponible": true
}
```

#### Listar Todas las Mascotas
```
GET /mascotas
```

#### Listar Mascotas Disponibles
```
GET /mascotas/disponibles
```

#### Obtener Mascota por ID
```
GET /mascotas/{id}
```

### Formularios de Adopción

#### Crear Formulario de Adopción
```
POST /formularios-adopcion
Content-Type: application/json

{
  "usuarioId": "550e8400-e29b-41d4-a716-446655440001",
  "mascotaId": "660e8400-e29b-41d4-a716-446655440001",
  "haTenidoMascotasAntes": true,
  "tipoVivienda": "Casa con jardín"
}
```

#### Listar Formularios
```
GET /formularios-adopcion
```

#### Obtener Formulario por ID
```
GET /formularios-adopcion/{id}
```

#### Listar Formularios por Usuario
```
GET /formularios-adopcion/usuario/{usuarioId}
```

#### Aprobar/Rechazar Solicitud
```
PUT /formularios-adopcion/{id}/estado
Content-Type: application/json

{
  "estado": "APROBADO"
}
```

Estados disponibles: `PENDIENTE`, `APROBADO`, `RECHAZADO`

## Validaciones Implementadas

### Usuario
- Nombre completo requerido (mínimo 2 caracteres)
- Email válido y único
- Teléfono requerido
- Dirección requerida

### Mascota
- Nombre requerido
- Especie requerida
- Raza requerida
- Edad requerida (no negativa)
- Disponible (booleano, por defecto true)

### Formulario de Adopción
- Usuario ID requerido (UUID válido)
- Mascota ID requerido (UUID válido)
- Ha tenido mascotas antes (booleano)
- Tipo de vivienda requerido

### Reglas de Negocio
- No se puede duplicar email de usuarios
- Solo se puede adoptar mascotas disponibles
- No se puede crear múltiples solicitudes pendientes para la misma mascota del mismo usuario
- Al aprobar una adopción, la mascota se marca como no disponible
- Solo se puede cambiar el estado de solicitudes pendientes

## Datos de Ejemplo

El sistema incluye datos de ejemplo:

### Usuarios
- Juan Pérez (ID: 550e8400-e29b-41d4-a716-446655440001)
- María González (ID: 550e8400-e29b-41d4-a716-446655440002)

### Mascotas
- Max - Golden Retriever (disponible)
- Luna - Gato Siames (disponible)
- Rocky - Pastor Alemán (no disponible)
- Mimi - Gato Persa (disponible)

### Formularios
- Solicitud aprobada de Juan para Rocky

## Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev

# Ejecutar en modo producción
npm run start:prod
```

El servidor se ejecuta en http://localhost:3000
