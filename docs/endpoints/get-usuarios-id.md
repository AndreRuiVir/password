# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "correo_electronico": "usuario1@example.com",
  "contrasena": "contrasena123",
  "nombre_completo": "Usuario Uno"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró esta versión."
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.