# 🌤 Sistema de Clima en Tiempo Real con WebSockets (NestJS + TypeORM)

Este proyecto es una aplicación de clima en tiempo real construida con NestJS y WebSockets. Permite registrar ubicaciones, registrar condiciones climáticas y asociarlas con una consulta de clima. Utiliza SQLite como base de datos y permite comunicación bidireccional usando WebSockets.

---

## 🚀 Tecnologías y Librerías Usadas

- NestJS (Framework principal)
- WebSockets (socket.io para comunicación en tiempo real)
- TypeORM (ORM para base de datos)
- SQLite (Base de datos embebida)
- class-validator (validación de DTOs)
- Postman (para pruebas de WebSocket)

---

## 🏗️ Entidades Aplicadas

1. Ubicacion
   - ciudad: string
   - país: string
   - latitud: string
   - longitud: string

2. Clima
   - descripcion: string
   - temperatura: string
   - humedad: string
   - viento: string

3. ConsultaClima
   - fecha: Date
   - ubicación: Ubicacion
   - clima: Clima

---

## ⚙️ Instalación y Configuración

1. Clona este repositorio:

```bash
git clone https://github.com/EZMayk/Reposity-of-Aplicaciones.git
cd Parcial_2/Practicas/practica_3
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
npm run start:dev
```

Esto levantará el servidor en:  
📡 WebSocket: ws://localhost:3000/

---

## 🧪 Pruebas con Postman (WebSocket)

Puedes usar Postman para conectarte al WebSocket y probar los siguientes eventos:

📍 Ubicación:
- ubicacion:create
- ubicacion:list
- ubicacion:update
- ubicacion:delete

☁️ Clima:
- clima:create
- clima:list
- clima:update
- clima:delete

🔍 ConsultaClima:
- consulta:create
- consulta:list
- consulta:update
- consulta:delete

📥 Mensaje de ejemplo para crear una ubicación:

Event: ubicacion:create  
Body:
```json
{
  "ciudad": "Quito",
  "pais": "Ecuador",
  "latitud": "-0.1807",
  "longitud": "-78.4678"
}
```

---

## 📫 Colección Postman (WebSocket)

Puedes usar esta colección de Postman para probar todos los eventos:

🔗 https://postman.co/workspace/My-Workspace~5aa5fa33-6ada-4d90-83b0-391e50dbe1a8/collection/6875f558e12578b45f431681?action=share&creator=37223984

---

