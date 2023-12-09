# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                   | Descripción |
| ------------------------- | ----------- |
| `GET /usuarios`               | Recupera la lista de todos los usuarios disponibles.|
| `GET /usuarios/{id}`          | Obtiene información detallada sobre un usuario específico. [Detalles](./endpoints/get-usuarios-id.md) |
| `POST /usuarios`              | Crea un nuevo usuario. [Detalles](./endpoints/post-usuarios.md) |
| `PUT /usuarios/{id}`          | Actualiza completamente la información de un usuario existente. [Detalles](./endpoints/put-usuarios-id.md) |
| `PATCH /usuarios/{id}`        | Actualiza parcialmente la información de un usuario existente. [Detalles](./endpoints/patch-usuarios-id.md) |
| `GET /brechas_seguridad`            | Recupera la lista de todas las brechas de seguridad registradas.|
| `GET /brechas_seguridad/{id}`       | Obtiene información detallada sobre una brecha de seguridad en especifico. [Detalles](./endpoints/get-brechas_seguridad-id.md) |
| `POST /brechas_seguridad`           | Crea un nuevo registro de una brecha de seguridad. [Detalles](./endpoints/post-brechas_seguridad.md) |
| `PUT /brechas_seguridad/{id}`       | Actualiza completamente la información de una brecha de seguridad existente. [Detalles](./endpoints/put-brechas_seguridad-id.md) |
| `PATCH /brechas_seguridad/{id}`     | Actualiza parcialmente la información de una brecha de seguridad existente. [Detalles](./endpoints/patch-brechas_seguridad-id.md) |
| `GET /informacion_aplicacion`             | Recupera la lista de todos los registros de todas las versiones de la aplicación registradas.|
| `GET /informacion_aplicacion/{id}`        | Obtiene información detallada sobre un registro de alguna versión de la aplicación. [Detalles](./endpoints/get-informacion_aplicacion-id.md) |
| `POST /informacion_aplicacion`            | Crea un nuevo registro de versión de la aplicación. [Detalles](./endpoints/post-informacion_aplicacion.md) |
| `PUT /informacion_aplicacion/{id}`        | Actualiza completamente la información de un registro de versión de la aplicación existente. [Detalles](./endpoints/put-informacion_aplicacion-id.md) |
| `PATCH /informacion_aplicacion/{id}`      | Actualiza parcialmente la información de un registro de versión de la aplicación existente. [Detalles](./endpoints/patch-informacion_aplicacion-id.md) |
| `GET /usuarios_brechas`             | Recupera la lista de todos los registros de todos los usuarios involucrados en una brecha de seguridad.|
| `GET /usuarios_brechas/{id}`        | Obtiene información detallada sobre un registro de un usuario involucrado en una brecha de seguridad específico. [Detalles](./endpoints/get-usuarios_brechas-id.md) |
| `POST /usuarios_brechas`            | Crea un nuevo registro de un usuario involucrado en una brecha de seguridad. [Detalles](./endpoints/post-usuarios_brechas.md) |
| `PUT /usuarios_brechas/{id}`        | Actualiza completamente la información de un registro de un usuario involucrado en una brecha de seguridad existente. [Detalles](./endpoints/put-usuarios_brechas-id.md) |
| `PATCH /usuarios_brechas/{id}`      | Actualiza parcialmente la información de un registro de un usuario involucrado en una brecha de seguridad existente. [Detalles](./endpoints/patch-usuarios_brechas-id.md) |