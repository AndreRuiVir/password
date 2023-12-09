# Endpoint: `PATCH /usuarios/{id}`

Permite actualizar parcialmente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.


## Ejemplo de Solicitud
```http
PATCH /usuarios/1
Content-Type: application/json

{
"correo_electronico": "usuario1@example.com",
  "contrasena": "contrasena123",
  "nombre_completo": "Usuario 1"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "mensaje": "Datos de usuario involucrado en una brecha modificados exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró la brecha."
  }
  ```

- Código 400 Bad Request:
  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "No se proporcionaron campos válidos para actualizar."
  }
  ``` 


- Código 500 Internal Server Error:
  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "No se proporcionaron campos válidos para actualizar."
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre el usuario involucrado en una brecha de datos en específico.