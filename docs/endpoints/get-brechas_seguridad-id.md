# Endpoint: `GET /brechas_seguridad/{id}`

Permite obtener información detallada sobre una brecha de seguridad en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la brecha de seguridad que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /brechas_seguridad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_brecha": 1,
  "nombre_brecha": "Brecha 1",
  "fecha_detencion":"2023-01-15"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró esta brecha."
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
  sobre una brecha de seguridad en específico.
