# Endpoint: `GET /usuarios_brechas/{id}`

Permite obtener información detallada sobre un usuario involucrado en una brecha de seguridad en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de los usuarios involucrados en brechas de seguridad que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios_brechas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_relacion": 1,
  "fk_id_usuario": 1,
  "fk_id_brecha": 1
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
  sobre un usuario involucrado en una brecha en específico.