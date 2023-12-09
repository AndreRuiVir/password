# Endpoint: `POST/brechas_seguridad`

Permite registrar una nueva brecha de seguridad.


## Ejemplo de Solicitud
```http
POST /brechas_seguridad/{id}
Content-Type: application/json

{
  "nombre_brecha": "Brecha 4",
  "fecha_detencion": "2023-012-08"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_brecha": 4,
  "mensaje": "Brecha de seguridad registrada exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

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
  sobre una brecha de seguridad en específico.