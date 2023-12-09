# Endpoint: `PATCH /brechas_seguridad/{id}`

Permite actualizar parcialmente la información de una brecha existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único de la brecha de seguridad que se desea actualizar.


## Ejemplo de Solicitud
```http
PATCH /brechas_seguridad/1
Content-Type: application/json

{
  "nombre_brecha": "Brecha 1",
  "fecha_detencion": "2023-01-15"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "mensaje": "Brecha de seguridad actualizada exitosamente."
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
  sobre una brecha de seguridad en específico.