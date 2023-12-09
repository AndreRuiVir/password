# Endpoint: `POST/informacion_aplicacion`

Permite registrar una nueva versión de la aplicación.


## Ejemplo de Solicitud
```http
POST /informacion_aplicacion/{id}
Content-Type: application/json

{
  "version_aplicacion": "v2.1",
  "fecha_lanzamiento": "2023-012-08",
  "descripcion": "Optimización de aplicación"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_informacion": 4,
  "mensaje": "Versión registrada exitosamente."
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
  sobre una versión de la aplicación en específico.