# Sistema de Adopción de Mascotas - API REST

Este proyecto es una API REST desarrollada con **NestJS** para gestionar un sistema de adopción de mascotas. Permite el registro de usuarios, la gestión de mascotas disponibles para adopción y el procesamiento de formularios de adopción.

## 🚀 Características

- **Gestión de Usuarios**: Registro y consulta de usuarios adoptantes
- **Gestión de Mascotas**: CRUD de mascotas con control de disponibilidad
- **Formularios de Adopción**: Proceso completo de solicitudes de adopción
- **Validaciones Completas**: Validación de datos con class-validator
- **Persistencia Simulada**: Base de datos en memoria con datos de ejemplo
- **Arquitectura en Capas**: Separación clara entre controladores, servicios y datos

## 🏗️ Arquitectura

```
src/
├── interfaces/          # Contratos de datos
├── entities/           # Modelos de negocio
├── dto/               # Objetos de transferencia de datos
├── services/          # Lógica de negocio
├── controllers/       # Endpoints REST
└── data/             # Simulación de persistencia
```

## 📋 Entidades

### Usuario
- `id`: Identificador único (UUID)
- `nombreCompleto`: Nombre completo del adoptante
- `email`: Email único
- `telefono`: Número de contacto
- `direccion`: Dirección residencial

### Mascota
- `id`: Identificador único (UUID)
- `nombre`: Nombre de la mascota
- `especie`: Tipo de animal (Perro, Gato, etc.)
- `raza`: Raza específica
- `edad`: Edad en años
- `disponible`: Estado de disponibilidad para adopción

### FormularioAdopcion
- `id`: Identificador único (UUID)
- `usuarioId`: Referencia al usuario adoptante
- `mascotaId`: Referencia a la mascota
- `haTenidoMascotasAntes`: Experiencia previa con mascotas
- `tipoVivienda`: Tipo de hogar (casa, departamento, etc.)
- `fechaSolicitud`: Fecha de la solicitud
- `estado`: PENDIENTE | APROBADO | RECHAZADO

## 🔧 Instalación y Configuración

1. **Clonar o crear el proyecto**
```bash
git clone <repository-url>
cd adopcion-rest
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run start:dev
```

4. **Ejecutar en modo producción**
```bash
npm run build
npm run start:prod
```

## 📡 API Endpoints

### Usuarios
- `POST /usuarios` - Registrar nuevo usuario
- `GET /usuarios` - Listar todos los usuarios
- `GET /usuarios/:id` - Obtener usuario por ID

### Mascotas
- `POST /mascotas` - Crear nueva mascota
- `GET /mascotas` - Listar todas las mascotas
- `GET /mascotas/disponibles` - Listar mascotas disponibles
- `GET /mascotas/:id` - Obtener mascota por ID

### Formularios de Adopción
- `POST /formularios-adopcion` - Crear solicitud de adopción
- `GET /formularios-adopcion` - Listar todas las solicitudes
- `GET /formularios-adopcion/:id` - Obtener solicitud por ID
- `GET /formularios-adopcion/usuario/:usuarioId` - Solicitudes por usuario
- `PUT /formularios-adopcion/:id/estado` - Aprobar/Rechazar solicitud

## 🧪 Ejemplos de Uso

### Crear Usuario
```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "Juan Pérez",
    "email": "juan@email.com",
    "telefono": "+56912345678",
    "direccion": "Av. Las Condes 123"
  }'
```

### Crear Mascota
```bash
curl -X POST http://localhost:3000/mascotas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Max",
    "especie": "Perro",
    "raza": "Golden Retriever",
    "edad": 3
  }'
```

### Solicitar Adopción
```bash
curl -X POST http://localhost:3000/formularios-adopcion \
  -H "Content-Type: application/json" \
  -d '{
    "usuarioId": "uuid-del-usuario",
    "mascotaId": "uuid-de-la-mascota",
    "haTenidoMascotasAntes": true,
    "tipoVivienda": "Casa con jardín"
  }'
```

## ✅ Validaciones Implementadas

- **Email único** por usuario
- **Mascotas disponibles** para adopción
- **No duplicar solicitudes** pendientes para la misma mascota
- **Formato de datos** con class-validator
- **Estados válidos** para formularios
- **Solo cambios en solicitudes pendientes**

## 🎯 Reglas de Negocio

1. Un usuario solo puede tener una solicitud pendiente por mascota
2. Solo se pueden adoptar mascotas disponibles
3. Al aprobar una adopción, la mascota se marca como no disponible
4. Solo se puede cambiar el estado de solicitudes pendientes
5. Los emails de usuarios deben ser únicos

## 📊 Datos de Ejemplo

El sistema incluye datos precargados:
- 2 usuarios de ejemplo
- 4 mascotas (3 disponibles, 1 adoptada)
- 1 formulario de adopción aprobado

## 🛠️ Tecnologías Utilizadas

- **NestJS**: Framework Node.js
- **TypeScript**: Lenguaje de programación
- **class-validator**: Validación de datos
- **class-transformer**: Transformación de objetos
- **uuid**: Generación de identificadores únicos

## 📈 Estado del Proyecto

✅ **Completado**: Todas las funcionalidades solicitadas implementadas
✅ **Probado**: Endpoints funcionando correctamente
✅ **Documentado**: Código y API documentados
✅ **Validado**: Reglas de negocio implementadas

El servidor está funcionando en: http://localhost:3000

---

*Desarrollado como parte del examen de Servidores P2*
