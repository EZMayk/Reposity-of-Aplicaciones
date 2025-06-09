

DEFINICION DE ENTIDADES Y LA LOGICA DE NEGOCIOS
ENTIDADES
Entrada:
* Comprar Entrada: El usuario elige película, función, asiento (si aplica) y paga.

* Cancelar Entrada: El usuario puede cancelar la entrada solo si la función no ha comenzado.

* Visualizar Entradas: El usuario puede consultar sus entradas activas.

* Validar Entrada: El personal puede marcar la entrada como usada al ingreso.



Funcion:
* Programar Función: El administrador asigna película, sala, fecha y hora.

* Actualizar Función: Solo si la función no ha iniciado (cambio de hora o sala).

* Listar Funciones: Usuarios ven solo funciones activas y disponibles.

* Cancelar Función: El administrador puede cancelar una función (las entradas se marcan como canceladas y pueden ser reembolsadas).



Pelicula:
* Registrar Película: Solo el administrador puede agregar una nueva película con su información completa.

* Actualizar Película: Puede cambiarse la sinopsis, el póster, el estado (activa/inactiva), etc.

* Listar Películas: Todos los usuarios pueden ver las películas activas.

* Eliminar o desactivar: Las películas solo pueden desactivarse si ya están vinculadas a funciones programadas.



Sala:
* Registrar Sala: Solo el administrador puede crear nuevas salas con capacidad y tipo.

* Actualizar Sala: Puede cambiar capacidad, nombre o tipo.

* Listar Salas: Todos pueden visualizar las salas disponibles.

* Desactivar Sala: Una sala puede desactivarse si no tiene funciones activas programadas.


Usuario:
* Registrar Usuario: Solo nombre, correo y contraseña.

* Iniciar Sesión: Autenticación por correo y contraseña.

* Gestión de Roles: Diferenciar acciones entre administrador y cliente.

* Actualizar Perfil: Los usuarios pueden cambiar su información personal.



