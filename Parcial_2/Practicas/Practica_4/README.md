# Sistema de Microservicios con NestJS

Este proyecto implementa una arquitectura de microservicios usando **NestJS**, compuesta por un **API Gateway** y los microservicios de **Ciudadanos**, **Cultivos**, **Sensores**, **Clima**, **Plagas** y **Exportación**, comunicándose a través de **NATS**.

---

## 🏗️ Arquitectura General

```
┌──────────────┐    NATS    ┌──────────────┐
│ API Gateway  │ ────────── │ Microservicio│
│ (Puerto 3000)│            │ Ciudadanos   │
│              │            │ Cultivos     │
│              │            │ Sensores     │
│              │            │ Clima        │
│              │            │ Plagas       │
│              │            │ Exportación  │
└──────────────┘            └──────────────┘
```

---

## 📦 Microservicios

Cada microservicio es un proyecto NestJS independiente, con su propia lógica y almacenamiento en memoria:

- **Ciudadanos**: CRUD de ciudadanos (id, nombre, email, edad, activo)
- **Cultivos**: CRUD de cultivos agrícolas
- **Sensores**: CRUD de sensores y sus lecturas
- **Clima**: CRUD de registros climáticos
- **Plagas**: CRUD de registros de plagas
- **Exportación**: CRUD de lotes de exportación

Todos exponen patrones de mensaje para operaciones CRUD y se comunican solo por NATS.

---

## 🌐 API Gateway

- Expone una API REST en el puerto 3000.
- Recibe peticiones HTTP y las traduce a mensajes NATS para los microservicios.
- Cada entidad tiene su propio módulo, controlador y servicio en el Gateway.
- Valida datos usando DTOs y class-validator antes de enviar a los microservicios.

---

## ⚙️ Requisitos

- **Node.js** (v16+)
- **npm** (v8+)
- **NestJS CLI**: `npm i -g @nestjs/cli`
- **Docker** (opcional, para NATS)

---

## 🛠️ Instalación y configuración

### 1. Clona el repositorio y entra al proyecto

```bash
git clone <url-del-repo>
cd Practica_4
```

### 2. Instala dependencias en cada carpeta

Repite en cada carpeta:  
`api-gateway`, `ciudadanos-microservice`, `cultivos-microservice`, `sensores-microservice`, `clima-microservice`, `plagas-microservice`, `exportacion-microservice`

```bash
npm install
```

### 3. Variables de entorno

Crea un archivo `.env` en cada microservicio y en el gateway:

**Ejemplo para microservicios:**
```
NATS_SERVERS=nats://localhost:4222
```

**Ejemplo para el gateway:**
```
PORT=3000
NATS_SERVERS=nats://localhost:4222
```

---

### 4. Inicia el servidor NATS

Si tienes Docker:

```bash
docker run -d --name nats-server -p 4222:4222 nats:latest
```

O instala y ejecuta NATS manualmente desde [nats.io](https://nats.io/download/).

---

### 5. Ejecuta los microservicios y el gateway

En **cada carpeta** de microservicio y en el gateway:

```bash
npm run start:dev
```

---

## 🚦 Uso de la API

### Endpoints REST (Gateway)

- `POST   /api/ciudadanos`
- `GET    /api/ciudadanos`
- `GET    /api/ciudadanos/:id`
- `PATCH  /api/ciudadanos/:id`
- `DELETE /api/ciudadanos/:id`

Repite el patrón para:
- `/api/cultivos`
- `/api/sensores`
- `/api/clima`
- `/api/plagas`
- `/api/exportacion`

### Ejemplo de uso con Postman o cURL

```bash
# Crear un ciudadano
curl -X POST http://localhost:3000/api/ciudadanos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan Pérez","email":"juan@example.com","edad":25}'

# Obtener todos los ciudadanos
curl http://localhost:3000/api/ciudadanos

# Actualizar un ciudadano
curl -X PATCH http://localhost:3000/api/ciudadanos/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan Actualizado"}'

# Eliminar un ciudadano
curl -X DELETE http://localhost:3000/api/ciudadanos/1
```

---

## 📚 ¿Qué hace cada microservicio?

- **Ciudadanos**: Gestiona personas (alta, baja, modificación, consulta)
- **Cultivos**: Gestiona cultivos agrícolas (tipo, fechas, estado)
- **Sensores**: Gestiona sensores y sus lecturas asociadas a cultivos
- **Clima**: Gestiona registros meteorológicos
- **Plagas**: Gestiona registros de plagas y tratamientos
- **Exportación**: Gestiona lotes de exportación de productos agrícolas

---

## 🧩 Estructura de carpetas

```
Practica_4/
  api-gateway/
  ciudadanos-microservice/
  cultivos-microservice/
  sensores-microservice/
  clima-microservice/
  plagas-microservice/
  exportacion-microservice/
```

---

## 📝 Notas

- Cada microservicio y el gateway tienen su propio `package.json`, `.env` y configuración.
- Todos los microservicios usan NATS para la comunicación.
- El Gateway es el único punto de entrada HTTP.
- Los datos se almacenan en memoria (para pruebas y desarrollo).

---

## 🛠️ Comandos útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev

# Compilar
npm run build

# Ejecutar en modo producción
npm run start
```

---

## 🐞 Solución de problemas

- **404 Not Found**: Usa siempre `/api/` como prefijo en las rutas.
- **NATS connection failed**: Verifica que el servidor NATS esté corriendo.
- **Cannot find module ...**: Asegúrate de que todos los archivos existan y ejecuta `npm run build` si es necesario.
- **Validación fallida**: Verifica que los datos enviados cumplen con los DTOs.

---

## 📖 Recursos

- [NestJS Docs](https://docs.nestjs.com/)
- [NATS Docs](https://docs.nats.io/)
- [Microservicios en NestJS](https://docs.nestjs.com/microservices/basics)

---
# Integrantes
- Jesus Ariel Montes Toro
- Michael Augusto Intriago Benitez
- Walther Javier Gutierrez Loor
- Emilio Sleimen Cardenas Avila
- Maykel Josue Menendez Velez
