# Endpoint: `PUT /brechas_seguridad/{id}`

Permite actualizar completamente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
`{id}` : Identificador único del usuario que se desea actualizar.


## Ejemplo de Solicitud
```http
PUT /brechas_seguridad/1
Content-Type: application/json

{
  "nombre_brecha": "Brecha 1",
  "fecha_detencion": "2023-01-15"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_brecha": 1,
  "mensaje": "Brecha actualizada exitosamente."
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
  sobre una brecha en específico.