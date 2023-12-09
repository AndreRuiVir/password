# Endpoint: `PUT /usuarios/{id}`

Permite actualizar completamente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
`{id}` : Identificador único del usuario que se desea actualizar.


## Ejemplo de Solicitud
```http
PUT /usuarios/1
Content-Type: application/json

{
  "correo_electronico": "usuario1@gmail.com",
  "contrasena": "nueva_contrasena",
  "nombre_completo": "Usuario 1"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "mensaje": "Usuario actualizado exitosamente."
}

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
  }

  ```

- Código 400 Bad Request:
```json
{
  "errno": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
}
```

- Código 500 Internal Server Error:
  ```json
  {
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un usuario en específico.