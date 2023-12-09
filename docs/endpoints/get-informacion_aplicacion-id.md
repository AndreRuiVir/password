# Endpoint: `GET /informacion_aplicacion/{id}`

Permite obtener información detallada sobre una versión de aplicación en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la versión de aplicación que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /informacion_aplicacion/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_informacion": 1,
  "version_aplicacion": "v1.0",
  "fecha_lanzamiento":"2023-01-01",
  "descripcion":"Primera versión de la aplicación"
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
  sobre una versión de aplicación en específico.
